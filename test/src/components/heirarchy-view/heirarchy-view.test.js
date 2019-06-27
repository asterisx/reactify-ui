import React from 'react';
import { HeirarchyView } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { displaysChildren } from '../../helpers';

describe('HeirarchyView Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<HeirarchyView />);
        expect(mountWrapper).toBeDefined();
    })

    displaysChildren(<HeirarchyView />);

    describe('props', () => {
        it('should accept className prop and pass it to the root container', () => {
            let someClass = "someClass";
            const mountWrapper = mount(<HeirarchyView className={someClass}></HeirarchyView>);
            expect(mountWrapper.hasClass(someClass)).toBeTruthy();
        });

        it('should accept item and pass it as is to HeirarchyView.Item', () => {
            const rootNodeText = 'root node text';
            const item = {
                text: rootNodeText,
                sub: [
                    {text: 'Option 1', key: 0},
                    {text: 'Option 2', key: 1},
                    {text: 'Option 3', key: 2},
                    {text: 'Option 4', key: 3},
                ],
            };

            const mountWrapper = mount(<HeirarchyView item={item} />);
            const rootItem = mountWrapper.find(HeirarchyView.Item).at(0);

            Object.keys(item).forEach(
                (key) => { 
                    if(key !== 'key') expect(rootItem.props()[key]).toBe(item[key]);
                }
            )
        });
    })
});