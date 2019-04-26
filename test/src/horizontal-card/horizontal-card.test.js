import React from "react";
import { HorizontalCard } from "reactify";
import { shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";

chai.should();
chai.use(chaiEnzyme());

describe("HorizontalCard Component", () => {
  it("renders correctly", () => {
    const shallowWrapper = shallow(<HorizontalCard />);
    expect(shallowWrapper).not.be.null;
  });

  describe("HorizontalCard Header", () => {
    it("renders correctly", () => {
      const shallowWrapper = shallow(<HorizontalCard.Header />);
      expect(shallowWrapper).not.be.null;
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const shallowWrapper = shallow(<HorizontalCard.Header className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const shallowWrapper = shallow(<HorizontalCard.Header>{childElem}</HorizontalCard.Header>);
      const childContent = shallowWrapper.find(`.${someClass}`);
      expect(childContent).not.be.null;
    });
  });

  describe("HorizontalCard Body", () => {
    it("renders correctly", () => {
      const shallowWrapper = shallow(<HorizontalCard.Body />);
      expect(shallowWrapper).not.be.null;
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const shallowWrapper = shallow(<HorizontalCard.Body className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const shallowWrapper = shallow(<HorizontalCard.Body>{childElem}</HorizontalCard.Body>);
      const childContent = shallowWrapper.find(`.${someClass}`);
      expect(childContent).not.be.null;
    });

    it("should have bordered class", () => {
      const shallowWrapper = shallow(<HorizontalCard.Body bordered />);
      expect(shallowWrapper.hasClass("reactify-horizontal-card--bordered")).to.be.true;
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const shallowWrapper3 = shallow(
        <HorizontalCard.Body bordered borderColor={borderColor} />
      );
      expect(shallowWrapper3.props().style["borderColor"]).to.equal(borderColor);
    });
  });

  describe("HorizontalCard Footer", () => {
    it("renders correctly", () => {
      const shallowWrapper = shallow(<HorizontalCard.Footer />);
      expect(shallowWrapper).not.be.null;
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const shallowWrapper = shallow(<HorizontalCard.Footer className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const shallowWrapper = shallow(<HorizontalCard.Footer>{childElem}</HorizontalCard.Footer>);
      const childContent = shallowWrapper.find(`.${someClass}`);
      expect(childContent).not.be.null;
    });

    it("should have bordered class", () => {
      const shallowWrapper = shallow(<HorizontalCard.Footer bordered />);
      expect(shallowWrapper.hasClass("reactify-horizontal-card--bordered")).to.be.true;
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const shallowWrapper3 = shallow(
        <HorizontalCard.Footer bordered borderColor={borderColor} />
      );
      expect(shallowWrapper3.props().style["borderColor"]).to.equal(borderColor);
    });
  });

  describe("props", () => {
    it("should accept className prop and pass it to the root container", () => {
      let someClass = "someClass";
      const shallowWrapper = shallow(<HorizontalCard className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should have correct size passed as props", () => {
      const shallowWrapper = shallow(<HorizontalCard size="small" />);
      expect(shallowWrapper.hasClass("reactify-horizontal-card--size-small")).to.be.true;

      const shallowWrapper1 = shallow(<HorizontalCard size="medium" />);
      expect(shallowWrapper1.hasClass("reactify-horizontal-card--size-medium")).to.be.true;

      const shallowWrapper2 = shallow(<HorizontalCard size="large" />);
      expect(shallowWrapper2.hasClass("reactify-horizontal-card--size-large")).to.be.true;

      let size = "40px";
      const shallowWrapper3 = shallow(<HorizontalCard size={size} />);
      expect(shallowWrapper3).to.have.style("height", size);
    });

    it("should have disabled class when disabled prop is pass", () => {
      const shallowWrapper = shallow(<HorizontalCard disabled />);
      expect(shallowWrapper.hasClass("reactify--disabled"));
    });
  });
});
