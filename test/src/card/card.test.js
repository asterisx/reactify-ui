import React from "react";
import { Card } from "reactify";
import { shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";

chai.should();
chai.use(chaiEnzyme());

describe("Card Component", () => {
  it("renders correctly", () => {
    const shallowWrapper = shallow(<Card />);
    expect(shallowWrapper).not.be.null;
  });

  it("should have a shadow by default", () => {
    const shallowWrapper = shallow(<Card />);
    console.log(shallowWrapper.debug())
    expect(shallowWrapper.hasClass('reactify-card--shadowed')).to.be.true;
  });


  describe("Card Header", () => {
    it("renders correctly", () => {
      const shallowWrapper = shallow(<Card.Header />);
      expect(shallowWrapper).not.be.null;
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const shallowWrapper = shallow(<Card.Header className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const shallowWrapper = shallow(<Card.Header>{childElem}</Card.Header>);
      const childContent = shallowWrapper.find(`.${someClass}`);
      expect(childContent).not.be.null;
    });
  });

  describe("Card Body", () => {
    it("renders correctly", () => {
      const shallowWrapper = shallow(<Card.Body />);
      expect(shallowWrapper).not.be.null;
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const shallowWrapper = shallow(<Card.Body className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const shallowWrapper = shallow(<Card.Body>{childElem}</Card.Body>);
      const childContent = shallowWrapper.find(`.${someClass}`);
      expect(childContent).not.be.null;
    });

    it("should have bordered class", () => {
      const shallowWrapper = shallow(<Card.Body bordered />);
      expect(shallowWrapper.hasClass("reactify-card--bordered")).to.be.true;
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const shallowWrapper3 = shallow(
        <Card.Body bordered borderColor={borderColor} />
      );
      expect(shallowWrapper3.props().style["borderColor"]).to.equal(borderColor);
    });
  });

  describe("Card Footer", () => {
    it("renders correctly", () => {
      const shallowWrapper = shallow(<Card.Footer />);
      expect(shallowWrapper).not.be.null;
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const shallowWrapper = shallow(<Card.Footer className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const shallowWrapper = shallow(<Card.Footer>{childElem}</Card.Footer>);
      const childContent = shallowWrapper.find(`.${someClass}`);
      expect(childContent).not.be.null;
    });

    it("should have bordered class", () => {
      const shallowWrapper = shallow(<Card.Footer bordered />);
      expect(shallowWrapper.hasClass("reactify-card--bordered")).to.be.true;
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const shallowWrapper3 = shallow(
        <Card.Footer bordered borderColor={borderColor} />
      );
      expect(shallowWrapper3.props().style["borderColor"]).to.equal(borderColor);
    });
  });

  describe("props", () => {
    it("should accept not have a shadow when shadowed is false", () => {
      const shallowWrapper = shallow(<Card shadowed={false} />);
      expect(shallowWrapper.hasClass('reactify-card--shadowed')).to.be.false;
    });

    it("should accept className prop and pass it to the root container", () => {
      let someClass = "someClass";
      const shallowWrapper = shallow(<Card className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should have correct size passed as props", () => {
      const shallowWrapper = shallow(<Card size="small" />);
      expect(shallowWrapper.hasClass("reactify-card--size-small")).to.be.true;

      const shallowWrapper1 = shallow(<Card size="medium" />);
      expect(shallowWrapper1.hasClass("reactify-card--size-medium")).to.be.true;

      const shallowWrapper2 = shallow(<Card size="large" />);
      expect(shallowWrapper2.hasClass("reactify-card--size-large")).to.be.true;

      let size = "40px";
      const shallowWrapper3 = shallow(<Card size={size} />);
      expect(shallowWrapper3).to.have.style("width", size);
    });

    it("should have disabled class when disabled prop is pass", () => {
      const shallowWrapper = shallow(<Card disabled />);
      expect(shallowWrapper.hasClass("reactify--disabled"));
    });
  });
});
