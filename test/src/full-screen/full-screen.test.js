import React from 'react';
import { FullScreen } from 'reactify';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(chaiEnzyme())

describe('FullScreen Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<FullScreen>Simple FullScreen</FullScreen>);
        expect(shallowWrapper).not.be.null;
    })

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const shallowWrapper = shallow(<FullScreen>{childElem}</FullScreen>);
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent).not.be.null;
    })

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const shallowWrapper = shallow(<FullScreen className={someClass}></FullScreen>);
            expect(shallowWrapper.hasClass(someClass)).to.be.true;
        })

        it('should have disabled class when disabled prop is pass', () => {
            const shallowWrapper = shallow(<FullScreen disabled={true} />);
            const icon = shallowWrapper.find('.reactify-fullScreen__icon');
            expect(icon.hasClass('reactify--disabled')).to.be.true;
        });

        it('should not display icon when showIcon is false', () => {
            const shallowWrapper = shallow(<FullScreen showIcon={false} />);
            expect(shallowWrapper.find('.reactify-fullScreen__icon').exists()).to.be.false;
        });

        it('should be expanded when expanded is true', () => {
            const shallowWrapper = shallow(<FullScreen expanded />);
            expect(shallowWrapper.hasClass('reactify-fullScreen--expanded')).to.be.true;
        });

        it('should contract when contractOnEscapeKey is true', () => {
            const mountWrapper = mount(<FullScreen expanded contractOnEscapeKey/>);
            mountWrapper.childAt(0).simulate('keydown', {key: 'Escape', keyCode: 27, which: 27});
            expect(mountWrapper.state().expanded).to.be.false;
        });
    })
});