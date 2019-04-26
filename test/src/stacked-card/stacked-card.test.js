import React from "react";
import { StackedCard } from "reactify";
import { shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";

chai.should();
chai.use(chaiEnzyme());

describe("StackedCard Component", () => {
  it("renders correctly", () => {
    const shallowWrapper = shallow(<StackedCard />);
    expect(shallowWrapper).not.be.null;
  });

  it("should have a shadow by default", () => {
    const shallowWrapper = shallow(<StackedCard />);
    expect(shallowWrapper.hasClass('reactify-stacked-card--shadowed')).to.be.true;
  });

  describe("StackedCard Header", () => {
    it("renders correctly", () => {
      const shallowWrapper = shallow(<StackedCard.Header />);
      expect(shallowWrapper).not.be.null;
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const shallowWrapper = shallow(<StackedCard.Header className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const shallowWrapper = shallow(<StackedCard.Header>{childElem}</StackedCard.Header>);
      const childContent = shallowWrapper.find(`.${someClass}`);
      expect(childContent).not.be.null;
    });
  });

  describe("StackedCard Body", () => {
    it("renders correctly", () => {
      const shallowWrapper = shallow(<StackedCard.Body />);
      expect(shallowWrapper).not.be.null;
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const shallowWrapper = shallow(<StackedCard.Body className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const shallowWrapper = shallow(<StackedCard.Body>{childElem}</StackedCard.Body>);
      const childContent = shallowWrapper.find(`.${someClass}`);
      expect(childContent).not.be.null;
    });

    it("should have bordered class", () => {
      const shallowWrapper = shallow(<StackedCard.Body bordered />);
      expect(shallowWrapper.hasClass("reactify-stacked-card--bordered")).to.be.true;
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const shallowWrapper3 = shallow(
        <StackedCard.Body bordered borderColor={borderColor} />
      );
      expect(shallowWrapper3.props().style["borderColor"]).to.equal(borderColor);
    });
  });

  describe("StackedCard Footer", () => {
    it("renders correctly", () => {
      const shallowWrapper = shallow(<StackedCard.Footer />);
      expect(shallowWrapper).not.be.null;
    });

    it("should accept className correctly", () => {
      const someClass = "some classname";
      const shallowWrapper = shallow(<StackedCard.Footer className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should display children prop passed", () => {
      let someClass = "someClass";
      let childElem = <div className={someClass} />;
      const shallowWrapper = shallow(<StackedCard.Footer>{childElem}</StackedCard.Footer>);
      const childContent = shallowWrapper.find(`.${someClass}`);
      expect(childContent).not.be.null;
    });

    it("should have bordered class", () => {
      const shallowWrapper = shallow(<StackedCard.Footer bordered />);
      expect(shallowWrapper.hasClass("reactify-stacked-card--bordered")).to.be.true;
    });

    it("should have borderColor", () => {
      let borderColor = "violet";
      const shallowWrapper3 = shallow(
        <StackedCard.Footer bordered borderColor={borderColor} />
      );
      expect(shallowWrapper3.props().style["borderColor"]).to.equal(borderColor);
    });
  });

  describe("props", () => {
    it("should accept not have a shadow when shadowed is false", () => {
      const shallowWrapper = shallow(<StackedCard shadowed={false} />);
      expect(shallowWrapper.hasClass('reactify-stacked-card--shadowed')).to.be.false;
    });

    it("should accept className prop and pass it to the root container", () => {
      let someClass = "someClass";
      const shallowWrapper = shallow(<StackedCard className={someClass} />);
      expect(shallowWrapper.hasClass(someClass)).to.be.true;
    });

    it("should have correct size passed as props", () => {
      const shallowWrapper = shallow(<StackedCard size="small" />);
      expect(shallowWrapper.hasClass("reactify-stacked-card--size-small")).to.be.true;

      const shallowWrapper1 = shallow(<StackedCard size="medium" />);
      expect(shallowWrapper1.hasClass("reactify-stacked-card--size-medium")).to.be.true;

      const shallowWrapper2 = shallow(<StackedCard size="large" />);
      expect(shallowWrapper2.hasClass("reactify-stacked-card--size-large")).to.be.true;

      let size = "40px";
      const shallowWrapper3 = shallow(<StackedCard size={size} />);
      expect(shallowWrapper3).to.have.style("height", size);
    });

    it("should have disabled class when disabled prop is pass", () => {
      const shallowWrapper = shallow(<StackedCard disabled />);
      expect(shallowWrapper.hasClass("reactify--disabled"));
    });
  });
});
