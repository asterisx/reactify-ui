import React from 'react';
import { UserProfile } from 'reactify';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.should();
chai.use(chaiEnzyme())

describe('UserProfile Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe"/>);
        expect(shallowWrapper).not.be.null;
    })

    it('defaults to trayOpen state false', () => {
        const shallowWrapper = shallow(<UserProfile  imgPath="" userName="Joe"/>);
        expect(shallowWrapper.state().trayOpen).to.be.false;
    })

    it('should change state when clicked', () => {
        const shallowWrapper = shallow(<UserProfile  imgPath="" userName="Joe"/>);
        shallowWrapper.simulate('click');
        jest.useFakeTimers();
        setTimeout(() => {
            expect(shallowWrapper.state().trayOpen).to.be.true;
        }, 0);
        jest.runAllTimers();
    })

    it('can call closeTray from functional children to close tray', () => {
        const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe">{(closeTray) => setTimeout(() => closeTray(), 1000)}</UserProfile>);
        shallowWrapper.find('.reactify-user_profile__dropdown-icon').simulate('click');
        jest.useFakeTimers();
        setTimeout(()=> {
            expect(shallowWrapper.state().trayOpen).to.be.false;
        }, 1000);
        jest.runAllTimers();
    })
    describe('props', () => {
        it('should display username when username prop is passed', () => {
            const username = "some username";
            const shallowWrapper = shallow(<UserProfile imgPath="" userName={username} />);
            const userNameSpan = shallowWrapper.find('.reactify-user_profile__username');
            expect(userNameSpan.text()).to.equal(username);
        });

        it('should position avatar correctly when avatarPosition prop is passed', () => {
            const positionTop = "top", positionBottom = "bottom";
            const mountWrapper = mount(<UserProfile imgPath="" userName="Joe" dropDownPLacement={positionTop} />);
            mountWrapper.simulate('click');
            const dropdown = mountWrapper.find('.reactify--z-index-10000');
            jest.useFakeTimers();
            setTimeout(()=> {
                expect(dropdown.hasClass(`reactify-user_profile__tray--placement-${positionTop}`)).to.be.true;
            }, 0);
            jest.runAllTimers();

            const mountWrapper1 = shallow(<UserProfile imgPath="" userName="Joe" dropDownPLacement={positionBottom} />);
            mountWrapper1.simulate('click');
            const dropdown1 = mountWrapper1.find('.reactify--z-index-10000');
            jest.useFakeTimers();
            setTimeout(()=> {
                expect(dropdown1.hasClass(`reactify-user_profile__tray--placement-${positionBottom}`)).to.be.true;
            }, 0); 
            jest.runAllTimers();
        });

        it('should display/hide message when showMessage prop is passed', () => {
            const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" message="Some Message" showMessage />);
            expect(shallowWrapper.find('.reactify-user_profile__message').exists()).to.be.true;

            const shallowWrapper1 = shallow(<UserProfile imgPath="" userName="Joe"  message="Some Message" showMessage={false} />);
            expect(shallowWrapper1.find('.reactify-user_profile__message').exists()).to.be.false;
        });

        it('should display message when welcomeMessage prop is passed', () => {
            const message = "some message";
            const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" welcomeMessage={message} />);
            expect(shallowWrapper.find('.reactify-user_profile__message').text()).to.equal(message);
        });

        it('breakpoints', () => {
            const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" breakPoints="sm" />);
            const tray = shallowWrapper.find('.reactify-user_profile__info');
            expect(tray.hasClass('reactify-user_profile--hide-breakpoint-sm')).to.be.true;

            const shallowWrapper1 = shallow(<UserProfile imgPath="" userName="Joe" breakPoints={["sm", "md", "lg", "xl"]} />);
            const tray1 = shallowWrapper1.find('.reactify-user_profile__info');
            expect(tray1.hasClass('reactify-user_profile--hide-breakpoint-sm')).to.be.true;
            expect(tray1.hasClass('reactify-user_profile--hide-breakpoint-md')).to.be.true;
            expect(tray1.hasClass('reactify-user_profile--hide-breakpoint-lg')).to.be.true;
            expect(tray1.hasClass('reactify-user_profile--hide-breakpoint-xl')).to.be.true;
        });

        it('should have disabled class when disabled prop is passed', () => {
            const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" disabled={true} />);
            expect(shallowWrapper.hasClass('reactify--disabled')).to.be.true;;
        });

        it('should have custom background color when color prop is passed', () => {
            const color = "violet"
            const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" color={color} />);
            const mainContainer = shallowWrapper.find('.reactify-user_profile__main');
            jest.useFakeTimers();
            setTimeout(
                () => {
                    expect(mainContainer).to.have.style('background-color', color)
            }, 0);
            jest.runAllTimers();
        });
 
        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" theme="default" />);
                const mainContainer = shallowWrapper.find('.reactify-user_profile__main');
                expect(mainContainer.hasClass('reactify-user_profile--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" theme="dark" />);
                const mainContainer = shallowWrapper.find('.reactify-user_profile__main');
                expect(mainContainer.hasClass('reactify-user_profile--theme-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" theme="light" />);
                const mainContainer = shallowWrapper.find('.reactify-user_profile__main');
                expect(mainContainer.hasClass('reactify-user_profile--theme-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" theme="info" />);
                const mainContainer = shallowWrapper.find('.reactify-user_profile__main');
                expect(mainContainer.hasClass('reactify-user_profile--theme-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" theme="warning" />);
                const mainContainer = shallowWrapper.find('.reactify-user_profile__main');
                expect(mainContainer.hasClass('reactify-user_profile--theme-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" theme="danger" />);
                const mainContainer = shallowWrapper.find('.reactify-user_profile__main');
                expect(mainContainer.hasClass('reactify-user_profile--theme-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<UserProfile imgPath="" userName="Joe" theme="success" />);
                const mainContainer = shallowWrapper.find('.reactify-user_profile__main');
                expect(mainContainer.hasClass('reactify-user_profile--theme-success')).to.be.true;
            });
        })
    })
});