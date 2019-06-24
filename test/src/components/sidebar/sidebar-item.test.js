import React from 'react';
import { SubSidebar, SidebarItem } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

describe('SidebarItem Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<SidebarItem />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<SidebarItem />);
    hasDisabledStyle(<SidebarItem />);

    it('should toggle state when clicked and has sub sidebar', () => {
        const mountWrapper = mount(<SidebarItem sub={[]}/>);
        expect(mountWrapper.state().subOpen).toBeFalsy();
        mountWrapper.simulate('click');
        expect(mountWrapper.state().subOpen).toBeTruthy();
    });

    describe('props', () => {
        it('should drill down positionFull to subSidebar', () => {
            const mountWrapper = mount(
                <SidebarItem positionFull>
                    <SubSidebar />
                </SidebarItem>
                );
            mountWrapper.simulate('click');
            const subSidebar = mountWrapper.find(SubSidebar);
            expect(subSidebar.props().positionFull).toBeTruthy();
        });
        
        it('should display text when passed', () => {
            let text = 'some text';
            const mountWrapper = mount(<SidebarItem text={text} />);
            expect(mountWrapper.text()).toEqual(expect.stringContaining(text));
        });
        
        it('should display content when passed and also display a dot', () => {
            let text = 'some text';
            let icon = 'some icon';
            let contentText = 'some content text';
            let content = () => <div>{contentText}</div>;
            const mountWrapper = mount(
                <SidebarItem 
                    text={text}
                    icon={icon}
                    content={content}
                >
                    <SubSidebar />
                </SidebarItem>);
            expect(mountWrapper.text()).toEqual(expect.stringContaining(contentText));
            expect(mountWrapper.text()).not.toEqual(expect.stringContaining(text));
            expect(mountWrapper.findWhere(n => n.name() === 'GoPrimitiveDot')).toBeDefined();
        });

        it('params passed to content should work correctly', () => {
            const mountWrapper = mount(
                <SidebarItem 
                    content={({issubOpen, toggleSub}) => { 
                        expect(issubOpen).toBeFalsy();
                        setTimeout(toggleSub, 0); 
                        return <div />; 
                    }
                }
                >
                    <SubSidebar />
                </SidebarItem>);
            setTimeout(() => 
                expect(mountWrapper.state().subOpen).toBeTruthy(), 
                0
            );
        });
    });
});