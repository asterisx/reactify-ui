import React from "react";
import { HorizontalCard, Constants } from "@../../../../reactify-ui/build";
import { mount } from "enzyme";
import { matchers } from 'jest-emotion';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe("HorizontalCard Component", () => {
  it("renders correctly", () => {
    const mountWrapper = mount(<HorizontalCard />);
    expect(mountWrapper).toBeDefined();
  });

  displaysChildren(<HorizontalCard />);

  hasDisabledStyle(<HorizontalCard />);

  it("should have a shadow by default", () => {
    const mountWrapper = mount(<HorizontalCard />);
    expect(mountWrapper).toHaveStyleRule('box-shadow', '0px 0px 5px 0px #888888');
  });

  describe("HorizontalCard Header", () => {
    it("renders correctly", () => {
      const mountWrapper = mount(<HorizontalCard.Header />);
      expect(mountWrapper).toBeDefined();
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const mountWrapper = mount(<HorizontalCard.Header className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    displaysChildren(<HorizontalCard />);
  });

  describe("HorizontalCard Body", () => {
    it("renders correctly", () => {
      const mountWrapper = mount(<HorizontalCard.Body />);
      expect(mountWrapper).toBeDefined();
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const mountWrapper = mount(<HorizontalCard.Body className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    displaysChildren(<HorizontalCard.Body />);

    it("should have bordered class", () => {
      const mountWrapper = mount(<HorizontalCard.Body bordered />);
      expect(mountWrapper).toHaveStyleRule('border-left', '1px solid darkgray');
      expect(mountWrapper).toHaveStyleRule('padding-left', '0.8em');
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const mountWrapper3 = mount(
        <HorizontalCard.Body bordered style={{borderColor: borderColor}} />
      );
      expect(mountWrapper3.props().style["borderColor"]).toBe(borderColor);
    });
  });

  describe("HorizontalCard Footer", () => {
    it("renders correctly", () => {
      const mountWrapper = mount(<HorizontalCard.Footer />);
      expect(mountWrapper).toBeDefined();
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const mountWrapper = mount(<HorizontalCard.Footer className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    displaysChildren(<HorizontalCard.Footer />);

    it("should have bordered class", () => {
      const mountWrapper = mount(<HorizontalCard.Footer bordered />);
      expect(mountWrapper).toHaveStyleRule('border-left', '1px solid darkgray');
      expect(mountWrapper).toHaveStyleRule('padding-left', '0.8em');
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const mountWrapper3 = mount(
        <HorizontalCard.Footer bordered style={{borderColor: borderColor}} />
      );
      expect(mountWrapper3.props().style["borderColor"]).toBe(borderColor);
    });
  });

  describe("props", () => {
    it("should accept not have a shadow when shadowed is false", () => {
      const mountWrapper = mount(<HorizontalCard shadowed={false} />);
      expect(mountWrapper).not.toHaveStyleRule('box-shadow', '0px 0px 5px 0px #888888');
    });

    it("should accept className prop and pass it to the root container", () => {
      let someClass = "someClass";
      const mountWrapper = mount(<HorizontalCard className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    it("should have correct size passed as props", () => {
      const mountWrapper = mount(<HorizontalCard small/>);
      expect(mountWrapper).toHaveStyleRule('height', '10em');

      const mountWrapper1 = mount(<HorizontalCard medium/>);
      expect(mountWrapper1).toHaveStyleRule('height', '15em');

      const mountWrapper2 = mount(<HorizontalCard large/>);
      expect(mountWrapper2).toHaveStyleRule('height', '20em');

      let height = "40px";
      const mountWrapper3 = mount(<HorizontalCard style={{height: height}} />);
      expect(mountWrapper3.props().style.height).toBe(height);
    });
  });
});