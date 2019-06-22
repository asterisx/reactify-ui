import React from 'react';
import { Highlight, Label, Constants } from '@../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

const text = `Lastly, she pictured to herself how this same little sister of hers would, 
in the after-time, be herself a grown woman; and how she would keep, through 
all her riper years, the simple and loving heart of her childhood; and how 
she would gather about her other little children, and make their eyes bright 
and eager with many a strange tale, perhaps even with the dream of Wonderland 
of long ago; and how she would feel with all their simple sorrows, and find a 
pleasure in all their simple joys, remembering her own child-life, and the 
happy summer days.`;

describe('Highlight Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<Highlight/>);
        expect(mountWrapper).toBeDefined();
    })


    describe('props', () => {
        it('should have highlight matching for passed value', () => {
            const filter = "with";
            const mountWrapper = mount(<Highlight filter={filter}>{text}</Highlight>);
            const labels = mountWrapper.find(Label);
            labels.forEach(label => expect(labels.text()).toBe(filter));

            const filterWeird = 'wITh';
            const mountWrapper1 = mount(<Highlight insensitive filter={filterWeird}>{text}</Highlight>);
            const labels1 = mountWrapper.find(Label);
            labels1.forEach(label => expect(labels.text()).toBe(filter));
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<Highlight filter="with" {...props}>{text}</Highlight>);
                    const labels = mountWrapper.find(Label);
                    labels.forEach(label => expect(label).toHaveStyleRule('background-color', ThemeColors[key].color));
                });
            });
        });
    });
});