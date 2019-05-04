import React from 'react';
import { StarRating, Constants } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';

expect.extend(matchers);

describe('StarRating Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<StarRating />);
        expect(mountWrapper).toBeDefined();
    })

    describe('props', () => {
        it('should call onChange function when a rating is clicked', () => {
            const spy = sinon.spy();
            const mountWrapper = mount(<StarRating onChange={spy}/>);
            const stars = mountWrapper.findWhere(n => n.name() !== 'EmotionCssPropInternal' && n.hasClass('reactify-ui-star-rating__star'));
            stars.at(0).simulate('click');
            expect(spy.called).toBeTruthy();
        });

        it('should have selected stars when rating prop is passed', () => {
            let rating = 2;
            const stars = mount(<StarRating rating={rating} />).findWhere(n => n.name() !== 'EmotionCssPropInternal' && n.hasClass('reactify-ui-star-rating__star'));
            // Because of styles components, there is a emotion HOC which contains same props as the one it contains
            expect(stars.at(0)).toHaveStyleRule('color', 'currentColor');
            expect(stars.at(1)).toHaveStyleRule('color', 'currentColor');
            expect(stars.at(2)).not.toHaveStyleRule('color', 'currentColor');
            expect(stars.at(3)).not.toHaveStyleRule('color', 'currentColor');
            expect(stars.at(4)).not.toHaveStyleRule('color', 'currentColor');
        });

        it('should have corrent number of stars when highest rating prop is passed', () => {
            let count = 10;
            const stars = mount(<StarRating highestRating={count} />).findWhere(n => n.name() !== 'EmotionCssPropInternal' && n.hasClass('reactify-ui-star-rating__star'));
            // Because of styles components, there is a emotion HOC which contains same props as the one it contains
            expect(stars.length).toBe(count);
        });

        it('should have disabled class when disabled prop is passed', () => {
           /*  const mountWrapper = mount(<NumberCounter to={10000} disabled />);
            expect(mountWrapper.hasClass('reactify--disabled')).toBeTruthy(); */
        });

        it('should have custom color when color prop is passed', () => {
            const color = "violet";
            const mountWrapper = mount(<StarRating style={{color: color}} />).findWhere(n => n.name() === 'StarRating');
            expect(mountWrapper.props().style.color).toBe(color);
        
        });

        it('should have correct size passed as props', () => {
            const mountWrapper = mount(<StarRating small />);
            expect(mountWrapper).toHaveStyleRule('font-size', Constants.commonStyles.sizes.small.fontSize);

            const mountWrapper1 = mount(<StarRating medium />);
            expect(mountWrapper1).toHaveStyleRule('font-size', Constants.commonStyles.sizes.medium.fontSize);

            const mountWrapper2 = mount(<StarRating large />);
            expect(mountWrapper2).toHaveStyleRule('font-size', Constants.commonStyles.sizes.large.fontSize);

            const fontSize = "40px";
            const mountWrapper3 = mount(<StarRating style={{fontSize: fontSize}} />);
            expect(mountWrapper3.props().style.fontSize).toBe(fontSize);
        });

 
        describe('should have correct theme when theme prop is passed', () => {
            let ThemeColors = Constants.defaultThemeColors;
            Object.keys(ThemeColors).map(key => {
                it(`${key} theme`, () => {
                    const props = {};
                    props[key] = true;
                    const mountWrapper = mount(<StarRating {...props}/>);
                    expect(mountWrapper).toHaveStyleRule('color', ThemeColors[key].color);
                });
            });
        });
    });
})