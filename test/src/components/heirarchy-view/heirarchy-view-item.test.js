import React from 'react';
import { HeirarchyView } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { displaysChildren } from '../../helpers';

describe('HeirarchyView.Item Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<HeirarchyView.Item />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<HeirarchyView.Item />);

    describe('props', () => {
        it('should display text when passed', () => {
            let text = 'some text';
            const mountWrapper = mount(<HeirarchyView.Item text={text} />);
            expect(mountWrapper.text()).toEqual(expect.stringContaining(text));
        });
        
        it('should display content when passed and not text', () => {
            let text = 'some text';
            let contentText = 'some content text';
            let content = <div>{contentText}</div>;
            const mountWrapper = mount(
                <HeirarchyView.Item 
                    text={text}
                    content={content}
                    />
                );
            expect(mountWrapper.text()).toEqual(expect.stringContaining(contentText));
            expect(mountWrapper.text()).not.toEqual(expect.stringContaining(text));
        });

        it('should map over items and generate HeirarchyViewItems', () => {
            const sub = [
                {text: 'Option 1', key: 0},
                {text: 'Option 2', key: 1},
                {text: 'Option 3', key: 2},
                {text: 'Option 4', key: 3},
            ];

            const mountWrapper = mount(<HeirarchyView.Item text="some text" sub={sub}></HeirarchyView.Item>);
            const items = mountWrapper.childAt(0).find(HeirarchyView.Item);

            [0,1,2,3].forEach(
                val => Object.keys(sub[val]).forEach(
                    (key) => { 
                        if(key !== 'key') expect(items.at(val).props()[key]).toBe(sub[val][key]);
                    }
                )
            );
        });

    });
});
