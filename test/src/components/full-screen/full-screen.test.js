import React from 'react';
import { FullScreen } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { displaysChildren, hasDisabledStyle } from '../../common';

expect.extend(matchers);

describe('FullScreen Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<FullScreen>Simple FullScreen</FullScreen>);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<FullScreen></FullScreen>);

    it('can be proramatically expanded and reset', () => {
        let expandFunc = undefined, resetFunc = undefined;
        const mountWrapper = mount(<FullScreen>{({expand, reset}) => { expandFunc = expand; resetFunc = reset;}}</FullScreen>);
        expect(mountWrapper.state().expanded).toBeFalsy();
        expandFunc();
        expect(mountWrapper.state().expanded).toBeTruthy();
        resetFunc();
        expect(mountWrapper.state().expanded).toBeFalsy();
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

        it('should not display icon when hideIcon is passed', () => {
            const mountWrapper = mount(<FullScreen hideIcon />);
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