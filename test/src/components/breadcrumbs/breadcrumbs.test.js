import React from 'react';
import { Breadcrumbs } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

const items = [
    {
      content: 'Home',
      key: 0,
      onClick: () => console.log('Home'),
    },
    {
      content: 'About',
      key: 1,
      onClick: () => console.log('About'),
    },
    {
      content: 'Company Culture',
      key: 2,
      onClick: () => console.log('Company Culture'),
    },
];

describe('Breadcrumbs Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Breadcrumbs />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<Breadcrumbs />);

    hasDisabledStyle(<Breadcrumbs />);

    it('should have correct number of seperators', () => {
        const mountWrapper = mount(<Breadcrumbs items={items}/>);
        expect(mountWrapper.find('li').length).toBe((2 * items.length) - 1);
    });

    describe('props', () => {
        it('should use the passed seperator', () => {
            const seperator = <span className="seperator">seperator</span>;
            const mountWrapper = mount(<Breadcrumbs items={items} seperator={seperator}/>);
            expect(mountWrapper.find('.seperator').length).toBe(items.length - 1);
        });
    })
});