import React from 'react';
import { FullScreen } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('FullScreen Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<FullScreen>Simple FullScreen</FullScreen>);
        expect(mountWrapper).toBeDefined();
    })

    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass}></div>;
        const mountWrapper = mount(<FullScreen>{childElem}</FullScreen>);
        const childContent = mountWrapper.find(`.${someClass}`);
        expect(childContent).toBeDefined();
    })

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<FullScreen className={someClass}></FullScreen>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        })

        it('should have disabled class when disabled prop is pass', () => {
          /*   const mountWrapper = mount(<FullScreen disabled={true} />);
            const icon = mountWrapper.find('.reactify-ui-fullScreen__icon');
            expect(icon.hasClass('reactify--disabled')).toBeTruthy(); */
        });

        it('should not display icon when showIcon is false', () => {
            const mountWrapper = mount(<FullScreen showIcon={false} />);
            expect(mountWrapper.find('.reactify-ui-fullScreen__icon').exists()).toBeFalsy();
        });

        it('should be expanded when expanded is true', () => {
            const mountWrapper = mount(<FullScreen expanded />);
            expect(mountWrapper.state().expanded).toBeTruthy();
        });

        it('should contract when contractOnEscapeKey is true', () => {
            const mountWrapper = mount(<FullScreen expanded contractOnEscapeKey/>);
            mountWrapper.childAt(0).simulate('keydown', {key: 'Escape', keyCode: 27, which: 27});
            expect(mountWrapper.state().expanded).toBeFalsy();
        });
    })
});