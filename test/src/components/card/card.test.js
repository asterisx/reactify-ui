import React from "react";
import { Card, Constants } from "reactify";
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren, hasDisabledStyle } from '../../common';

expect.extend(matchers);

describe("Card Component", () => {
  it("renders correctly", () => {
    const mountWrapper = mount(<Card />);
    expect(mountWrapper).toBeDefined();
  });

  it("should have a shadow by default", () => {
    const mountWrapper = mount(<Card />);
    expect(mountWrapper).toHaveStyleRule('box-shadow', '0px 0px 5px 0px #888888');
  });


  describe("Card Header", () => {
    it("renders correctly", () => {
      const mountWrapper = mount(<Card.Header />);
      expect(mountWrapper).toBeDefined();
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const mountWrapper = mount(<Card.Header className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    displaysChildren(<Card.Header></Card.Header>);
  });

  describe("Card Body", () => {
    it("renders correctly", () => {
      const mountWrapper = mount(<Card.Body />);
      expect(mountWrapper).toBeDefined();
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const mountWrapper = mount(<Card.Body className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    displaysChildren(<Card.Body></Card.Body>);

    it("should have bordered class", () => {
      const mountWrapper = mount(<Card.Body bordered />);
      expect(mountWrapper).toHaveStyleRule('border-top', '1px solid darkgray');
      expect(mountWrapper).toHaveStyleRule('padding-top', '0.8em');
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const mountWrapper3 = mount(
        <Card.Body bordered style={{borderColor: borderColor}} />
      );
      expect(mountWrapper3.props().style["borderColor"]).toBe(borderColor);
    });
  });

  describe("Card Footer", () => {
    it("renders correctly", () => {
      const mountWrapper = mount(<Card.Footer />);
      expect(mountWrapper).toBeDefined();
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const mountWrapper = mount(<Card.Footer className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    displaysChildren(<Card.Footer></Card.Footer>);


    it("should have bordered style", () => {
      const mountWrapper = mount(<Card.Footer bordered />);
      expect(mountWrapper).toHaveStyleRule('border-top', '1px solid darkgray');
      expect(mountWrapper).toHaveStyleRule('padding-top', '0.8em');
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const mountWrapper3 = mount(
        <Card.Footer bordered style={{borderColor: borderColor}} />
      );
      expect(mountWrapper3.props().style["borderColor"]).toBe(borderColor);
    });
  });

  describe("props", () => {
    it("should accept not have a shadow when shadowed is false", () => {
      const mountWrapper = mount(<Card shadowed={false} />);
      expect(mountWrapper).not.toHaveStyleRule('box-shadow', '0px 0px 5px 0px #888888');
    });

    it("should accept className prop and pass it to the root container", () => {
      let someClass = "someClass";
      const mountWrapper = mount(<Card className={someClass} />);
      expect(mountWrapper.hasClass(someClass)).toBeTruthy();
    });

    it("should have correct size passed as props", () => {
      const mountWrapper = mount(<Card small/>);
      expect(mountWrapper).toHaveStyleRule('width', '10em');

      const mountWrapper1 = mount(<Card medium/>);
      expect(mountWrapper1).toHaveStyleRule('width', '15em');

      const mountWrapper2 = mount(<Card large/>);
      expect(mountWrapper2).toHaveStyleRule('width', '20em');

      let width = "40px";
      const mountWrapper3 = mount(<Card style={{width: width}} />);
      expect(mountWrapper3.props().style.width).toBe(width);
    });

    hasDisabledStyle(<Card></Card>);
  });
});
