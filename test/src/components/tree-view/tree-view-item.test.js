import React from 'react';
import { Constants, TreeView, TreeViewItem } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

describe('TreeViewItem Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<TreeViewItem />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<TreeViewItem />);

    const classNameCloseIcon = 'close icon';
    const closeIcon = <div className={classNameCloseIcon} />;
    const mountWrapper = mount(<TreeViewItem closeIcon={closeIcon} disabled />);
    hasDisabledStyle(mountWrapper.find(`.${classNameCloseIcon}`).at(0));

    it('should toggle state when openIcon, closeIcon are clicked', () => {
        const classNameCloseIcon = 'closeIcon',
            classNameOpenIcon = 'openIcon';
        const closeIcon = <div className={classNameCloseIcon} />,
            openIcon = <div className={classNameOpenIcon} />;
        const mountWrapper = mount(<TreeViewItem closeIcon={closeIcon} openIcon={openIcon} sub={[]}/>);
        expect(mountWrapper.state().treeOpen).toBeFalsy();
        mountWrapper.find(`.${classNameCloseIcon}`).at(0).simulate('click');
        expect(mountWrapper.state().treeOpen).toBeTruthy();
        mountWrapper.find(`.${classNameOpenIcon}`).at(0).simulate('click');
        expect(mountWrapper.state().treeOpen).toBeFalsy();
    });

    describe('props', () => {
        it('should display text when passed', () => {
            let text = 'some text';
            const mountWrapper = mount(<TreeViewItem text={text} />);
            expect(mountWrapper.text()).toEqual(expect.stringContaining(text));
        });
        
        it('should display openIcon when sub tree is displaying', () => {
            const classNameOpenIcon = 'closeIcon';
            const openIcon = <div className={classNameOpenIcon} />;
            const mountWrapper = mount(<TreeViewItem openIcon={openIcon} />);
            mountWrapper.setState({treeOpen: true});
            expect(mountWrapper.find(`.${classNameOpenIcon}`)).toBeDefined();
        });

        it('should display closeIcon when sub tree is not displaying', () => {
            const classNameCloseIcon = 'closeIcon';
            const closeIcon = <div className={classNameCloseIcon} />;
            const mountWrapper = mount(<TreeViewItem closeIcon={closeIcon} />);
            expect(mountWrapper.find(`.${classNameCloseIcon}`)).toBeDefined();
        });
        
        it('should display content when passed and not display icons, text and arrow', () => {
            let text = 'some text';
            let icon = 'some icon';
            let contentText = 'some content text';
            let content = () => <div>{contentText}</div>;
            const mountWrapper = mount(
                <TreeViewItem 
                    text={text}
                    icon={icon}
                    content={content}
                >
                    <TreeView />
                </TreeViewItem>);
            expect(mountWrapper.text()).toEqual(expect.stringContaining(contentText));
            expect(mountWrapper.text()).not.toEqual(expect.stringContaining(text));
            expect(mountWrapper.text()).not.toEqual(expect.stringContaining(icon));
            expect(mountWrapper.findWhere(n => n.name() === 'FaAngleRight')).toEqual({});
        });

        it('params passed to content should work correctly', () => {
            const mountWrapper = mount(
                <TreeViewItem 
                    content={({isTreeOpen, toggleSubTree}) => { 
                        expect(isTreeOpen).toBeFalsy();
                        setTimeout(toggleSubTree, 0); 
                        return <div />; 
                    }
                }
                >
                    <TreeView />
                </TreeViewItem>);
            setTimeout(() => 
                expect(mountWrapper.state().treeOpen).toBeTruthy(), 
                0
            );
        });

        describe('should have correct theme when theme prop is passed and should apply it to icons', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const className = 'randomClass';
                    let closeIcon = <div className={className} />;
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<TreeViewItem {...props} index={0} closeIcon={closeIcon} sub={[]}/>);
                    const icon = mountWrapper.findWhere(node => node.name() === 'span' && node.props().onClick).at(0);
                    expect(icon).toHaveStyleRule('color', ThemeColors[key].color);
                });
            });
        });
    })
});