import React from 'react';
import { UserProfile, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import { darken } from 'polished';

expect.extend(matchers);

describe('UserProfile Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<UserProfile imgPath="" userName="Joe"/>);
        expect(mountWrapper).toBeDefined();
    })

    it('defaults to trayOpen state false', () => {
        const mountWrapper = mount(<UserProfile  imgPath="" userName="Joe"/>);
        expect(mountWrapper.state().trayOpen).toBeFalsy();
    })

    it('should change state when clicked', () => {
        const mountWrapper = mount(<UserProfile  imgPath="" userName="Joe"/>);
        mountWrapper.simulate('click');
        expect(mountWrapper.state().trayOpen).toBeTruthy();
    })

    it('can call closeTray from functional children to close tray', () => {
        jest.useFakeTimers();
        const mountWrapper = mount(<UserProfile imgPath="" userName="Joe">{(closeTray) => setTimeout(() => closeTray(), 1000)}</UserProfile>);
        setTimeout(()=> {
            expect(mountWrapper.state().trayOpen).toBeFalsy();
        }, 1000);
        jest.runAllTimers();
      
    })
    describe('props', () => {
        it('should display username when username prop is passed', () => {
            const username = "some username";
            const mountWrapper = mount(<UserProfile imgPath="" userName={username} />);
            expect(mountWrapper.text().search(username) >= 0).toBeTruthy();
        });

        it('should position avatar correctly when props are passed', () => {
            const positionTop = "top", positionBottom = "bottom";
            const mountWrapper = mount(<UserProfile imgPath="" userName="Joe" avatarLeft/>);
            const info = mountWrapper.find('.reactify-ui-user-profile__infoContainer').at(1);
            expect(info.childAt(0).childAt(0).hasClass('reactify-ui-user-profile__imgContainer')).toBeTruthy();

            const mountWrapper1 = mount(<UserProfile imgPath="" userName="Joe" avatarRight />);
            mountWrapper1.simulate('click');
            const info1 = mountWrapper1.find('.reactify-ui-user-profile__infoContainer').at(1);
            expect(info1.childAt(1).childAt(0).hasClass('reactify-ui-user-profile__imgContainer')).toBeTruthy();
        });

        it('should position dropDown correctly when props are passed', () => {
            const positionTop = "top", positionBottom = "bottom";
            const mountWrapper = mount(<UserProfile imgPath="" userName="Joe" dropDownTop />);
            mountWrapper.simulate('click');
            const dropdown = mountWrapper.find('.reactify-ui-user-profile__children');
            jest.useFakeTimers();
            setTimeout(()=> {
                expect(dropdown).toHaveStyleRule('position', 'absolute');
                expect(dropdown).toHaveStyleRule('right', '0px');
                expect(dropdown).toHaveStyleRule('bottom', '1.9em');
            }, 0);
            jest.runAllTimers();

            const mountWrapper1 = mount(<UserProfile imgPath="" userName="Joe" dropDownBottom />);
            mountWrapper1.simulate('click');
            const dropdown1 = mountWrapper1.find('.reactify-ui-user-profile__children');
            jest.useFakeTimers();
            setTimeout(()=> {
                expect(dropdown1).toHaveStyleRule('position', 'absolute');
                expect(dropdown1).toHaveStyleRule('right', '0px');
                expect(dropdown1).toHaveStyleRule('top', '1.9em');
            }, 0); 
            jest.runAllTimers();
        });


        it('should display/hide message when showMessage prop is passed', () => {
            let message = "some message";
            const mountWrapper = mount(<UserProfile imgPath="" userName="Joe" welcomeMessage={message} showMessage />);
            expect(mountWrapper.text().search(message) >= 0).toBeTruthy();

            const mountWrapper1 = mount(<UserProfile imgPath="" userName="Joe"  welcomeMessage={message} showMessage={false} />);
            expect(mountWrapper1.text().search(message) >= 0).toBeFalsy();
        });

        it('should display message when welcomeMessage prop is passed', () => {
            const message = "some message";
            const mountWrapper = mount(<UserProfile imgPath="" userName="Joe" welcomeMessage={message} />);
            expect(mountWrapper.text().search(message) >= 0).toBeTruthy();
        });

        it('breakpoints', () => {
            const mountWrapper = mount(<UserProfile imgPath="" userName="Joe" sm />);
            const tray = mountWrapper.find('.reactify-ui-user-profile__info').at(1);
            expect(tray).toHaveStyleRule('display', 'none', {
                media: '(max-width: 576px)'
            });

            const mountWrapper1 = mount(<UserProfile imgPath="" userName="Joe" sm md lg xl />);
            const tray1 = mountWrapper1.find('.reactify-ui-user-profile__info').at(1);
            expect(tray1).toHaveStyleRule('display', 'none', {
                media: '(max-width: 576px)'
            });
            expect(tray1).toHaveStyleRule('display', 'none', {
                media: '(max-width: 768px)'
            });
            expect(tray1).toHaveStyleRule('display', 'none', {
                media: '(max-width: 992px)'
            });
            expect(tray1).toHaveStyleRule('display', 'none', {
                media: '(max-width: 1200px)'
            });
        });

        it('should have disabled class when disabled prop is passed', () => {
           /*  const mountWrapper = mount(<UserProfile imgPath="" userName="Joe" disabled={true} />);
            expect(mountWrapper.hasClass('reactify--disabled')).toBeTruthy();; */
        });

        it('should have custom background color when color prop is passed', () => {
            const color = "violet"
            const mountWrapper = mount(<UserProfile imgPath="" userName="Joe" style={{backgroundColor: color}} />);
            expect(mountWrapper.props().style['backgroundColor']).toBe(color);
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<UserProfile imgPath="" userName="" {...props}></UserProfile>);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].fontColor);
                    expect(mountWrapper).toHaveStyleRule('background-color', ThemeColors[key].color);
                    expect(mountWrapper).toHaveStyleRule('background-color', darken(Constants.darkenBy, Constants.defaultThemeColors[key].color), { target: ':hover' });
                });
            });
        })
    })
});