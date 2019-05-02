import React from "react";
import { StackedCard, Constants } from "reactify";
import { mount } from "enzyme";
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe("StackedCard Component", () => {
  it("renders correctly", () => {
    const mountWrapper = mount(<StackedCard />);
    expect(mountWrapper).toBeDefined();
  });

  it("should have a shadow by default", () => {
    const mountWrapper = mount(<StackedCard />);
    expect(mountWrapper).toHaveStyleRule('box-shadow', '0px 0px 5px 0px #888888');
  });

  describe("StackedCard Header", () => {
    it("renders correctly", () => {
      const mountWrapper = mount(<StackedCard.Header />);
      expect(mountWrapper).toBeDefined();
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const mountWrapper = mount(<StackedCard.Header className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const mountWrapper = mount(<StackedCard.Header>{childElem}</StackedCard.Header>);
      const childContent = mountWrapper.find(`.${someClass}`);
      expect(childContent).toBeDefined();
    });
  });

  describe("StackedCard Body", () => {
    it("renders correctly", () => {
      const mountWrapper = mount(<StackedCard.Body />);
      expect(mountWrapper).toBeDefined();
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const mountWrapper = mount(<StackedCard.Body className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const mountWrapper = mount(<StackedCard.Body>{childElem}</StackedCard.Body>);
      const childContent = mountWrapper.find(`.${someClass}`);
      expect(childContent).toBeDefined();
    });

    it("should have bordered class", () => {
      const mountWrapper = mount(<StackedCard.Body bordered />);
      expect(mountWrapper).toHaveStyleRule('border-left', '1px solid darkgray');
      expect(mountWrapper).toHaveStyleRule('padding-left', '0.8em');
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const mountWrapper3 = mount(
        <StackedCard.Body bordered style={{borderColor: borderColor}} />
      );
      expect(mountWrapper3.props().style["borderColor"]).toBe(borderColor);
    });
  });

  describe("StackedCard Footer", () => {
    it("renders correctly", () => {
      const mountWrapper = mount(<StackedCard.Footer />);
      expect(mountWrapper).toBeDefined();
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const mountWrapper = mount(<StackedCard.Footer className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const mountWrapper = mount(<StackedCard.Footer>{childElem}</StackedCard.Footer>);
      const childContent = mountWrapper.find(`.${someClass}`);
      expect(childContent).toBeDefined();
    });

    it("should have bordered class", () => {
      const mountWrapper = mount(<StackedCard.Footer bordered />);
      expect(mountWrapper).toHaveStyleRule('border-left', '1px solid darkgray');
      expect(mountWrapper).toHaveStyleRule('padding-left', '0.8em');
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const mountWrapper3 = mount(
        <StackedCard.Footer bordered style={{borderColor: borderColor}} />
      );
      expect(mountWrapper3.props().style["borderColor"]).toBe(borderColor);
    });
  });

  describe("props", () => {
    it("should accept not have a shadow when shadowed is false", () => {
      const mountWrapper = mount(<StackedCard shadowed={false} />);
      expect(mountWrapper).not.toHaveStyleRule('box-shadow', '0px 0px 5px 0px #888888');
    });

    it("should accept className prop and pass it to the root container", () => {
      let someClass = "someClass";
      const mountWrapper = mount(<StackedCard className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    it("should have correct size passed as props", () => {
      const mountWrapper = mount(<StackedCard small/>);
      expect(mountWrapper).toHaveStyleRule('height', '10em');

      const mountWrapper1 = mount(<StackedCard medium/>);
      expect(mountWrapper1).toHaveStyleRule('height', '15em');

      const mountWrapper2 = mount(<StackedCard large/>);
      expect(mountWrapper2).toHaveStyleRule('height', '20em');

      let height = "40px";
      const mountWrapper3 = mount(<StackedCard style={{height: height}} />);
      expect(mountWrapper3.props().style.height).toBe(height);
    });

    it("should have disabled class when disabled prop is pass", () => {
     /*  const mountWrapper = mount(<StackedCard disabled />);
      expect(mountWrapper.hasClass("reactify--disabled")); */
    });
  });
});
