import React from 'react';
import { TopBar, Constants } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { darken } from 'polished';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('TopBar Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<TopBar />);
        expect(mountWrapper).toBeDefined();
    })

    displaysChildren(<TopBar />);

    describe('props', () => {
        it('should have disabled class when disabled prop is passed', () => {
           /*  const mountWrapper = mount(<TopBar disabled />);
            expect(mountWrapper.hasClass('reactify--disabled')).toBeTruthy(); */
        });

        it('should have correct size passed as props and should drill it to Children', () => {
            const mountWrapper = mount(<TopBar><TopBar.Logo small/></TopBar>);
            const logo = mountWrapper.find(TopBar.Logo);
            expect(logo).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<TopBar><TopBar.Logo medium/></TopBar>);
            const logo1 = mountWrapper1.find(TopBar.Logo);
            expect(logo1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<TopBar><TopBar.Logo large/></TopBar>);
            const logo2 = mountWrapper2.find(TopBar.Logo);
            expect(logo2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);
        });
 
        describe('should have correct theme when theme prop is passed and drill it in to children', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<TopBar {...props}><TopBar.Logo/></TopBar>);
                    const div = mountWrapper.findWhere(n => n.name() === 'div');
                    expect(div).toHaveStyleRule('color', ThemeColors[key].fontColor);
                    expect(div).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });

    describe('TopBar.Logo Component', () => {
        it('renders correctly', () => {
            const mountWrapper = mount(<TopBar.Logo/>);
            expect(mountWrapper).toBeDefined();
        });
    
        it("should display children prop passed", () => {
            let someClass = "someClass";
            let childElem = <div className={someClass} />;
            const mountWrapper = mount(<TopBar.Logo>{childElem}</TopBar.Logo>);
            const childContent = mountWrapper.find(`.${someClass}`);
            expect(childContent).toBeDefined();
        });
    

        it('should have custom color when color prop is passed', () => {
            const color = "violet"
            const mountWrapper = mount(<TopBar.Logo style={{backgroundColor: color}}/>);
            expect(mountWrapper.props().style['backgroundColor']).toBe(color);
        });

        it('should have correct size passed as props and should drill it to Logo', () => {
            const mountWrapper = mount(<TopBar.Logo small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<TopBar.Logo medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<TopBar.Logo large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<TopBar.Logo style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<TopBar.Logo {...props}></TopBar.Logo>);
                    const div = mountWrapper.findWhere(n => n.name() === 'div');
                    expect(div).toHaveStyleRule('color', ThemeColors[key].fontColor);
                    expect(div).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });

    describe('TopBar.Body Component', () => {
        it('renders correctly', () => {
            const mountWrapper = mount(<TopBar.Body/>);
            expect(mountWrapper).toBeDefined();
        });
    
        it("should display children prop passed", () => {
            let someClass = "someClass";
            let childElem = <div className={someClass} />;
            const mountWrapper = mount(<TopBar.Body>{childElem}</TopBar.Body>);
            const childContent = mountWrapper.find(`.${someClass}`);
            expect(childContent).toBeDefined();
        });
    

        it('should have custom color when color prop is passed', () => {
            const color = "violet"
            const mountWrapper = mount(<TopBar.Body style={{backgroundColor: color}}/>);
            expect(mountWrapper.props().style['backgroundColor']).toBe(color);
        });

        it('should have correct size passed as props and should drill it to Body', () => {
            const mountWrapper = mount(<TopBar.Body small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<TopBar.Body medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<TopBar.Body large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<TopBar.Body style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<TopBar.Body {...props}></TopBar.Body>);
                    const div = mountWrapper.findWhere(n => n.name() === 'div');
                    expect(div).toHaveStyleRule('color', ThemeColors[key].fontColor);
                    expect(div).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });

    describe('TopBar.Menu Component', () => {
        it('renders correctly', () => {
            const mountWrapper = mount(<TopBar.Menu/>);
            expect(mountWrapper).toBeDefined();
        });
    
        it("should display children prop passed", () => {
            let someClass = "someClass";
            let childElem = <div className={someClass} />;
            const mountWrapper = mount(<TopBar.Menu>{childElem}</TopBar.Menu>);
            const childContent = mountWrapper.find(`.${someClass}`);
            expect(childContent).toBeDefined();
        });
    

        it('should have custom color when color prop is passed', () => {
            const color = "violet"
            const mountWrapper = mount(<TopBar.Menu style={{backgroundColor: color}}/>);
            expect(mountWrapper.props().style['backgroundColor']).toBe(color);
        });

        it('should have correct size passed as props and should drill it to Menu', () => {
            const mountWrapper = mount(<TopBar.Menu small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<TopBar.Menu medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<TopBar.Menu large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<TopBar.Menu style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<TopBar.Menu {...props}></TopBar.Menu>);
                    const div = mountWrapper.findWhere(n => n.name() === 'div');
                    expect(div).toHaveStyleRule('color', ThemeColors[key].fontColor);
                    expect(div).toHaveStyleRule('background-color', ThemeColors[key].color);
                });
            });
        });
    });
});