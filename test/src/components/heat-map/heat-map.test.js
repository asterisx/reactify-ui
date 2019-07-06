import React from 'react';
import { HeatMap, Constants } from '../../../../reactify-ui/build';
import { mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import sinon from 'sinon';
import { parseToRgb } from 'polished';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

expect.extend(matchers);

const items = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
    [13, 14, 15, 16, 17, 18, 1, 4, 5, 7, 8, 4],
    [1, 4, 5, 7, 8, 4, 13, 14, 15, 16, 17, 18],
];

const itemsCount = items.reduce((acc, row) => acc + row.length, 0);

const flattenedValuesArray = items.reduce((acc, row) => acc.concat(row), []);

const maxValInItems = Math.max(...flattenedValuesArray);
const minValInItems = Math.min(...flattenedValuesArray);

const spread = maxValInItems - minValInItems;

const hasCorrectBackground = ({wrapper, color, opacity}) => {
    const colorAsRgb = parseToRgb(color);
    expect(wrapper.props().style['background']).toBe(`rgba(${colorAsRgb.red}, ${colorAsRgb.green}, ${colorAsRgb.blue}, ${opacity})`);
}

describe('HeatMap Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<HeatMap />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<HeatMap />);

    hasDisabledStyle(<HeatMap />)

    it('has correct number of cells matching data', () => {
        const onClickCallback = sinon.spy();
        const mountWrapper = mount(<HeatMap onCellClick={onClickCallback} items={items}/>);
        const noOfItems = mountWrapper.find(HeatMap.Cell).length;
        expect(noOfItems).toBe(itemsCount);

    });

    it('calls onCellClick correctly', () => {
        const onClickCallback = sinon.spy();
        const mountWrapper = mount(<HeatMap onCellClick={onClickCallback} items={items}/>);
        mountWrapper.find(HeatMap.Cell).at(0).simulate('click');
        expect(onClickCallback.called).toBeTruthy();
    });

    it('should have correct color when baseColor prop is passed', () => {
        const baseColor = 'violet';
        const mountWrapper = mount(<HeatMap items={items} baseColor={baseColor} />);
        mountWrapper.find(HeatMap.Cell).forEach(item => 
            hasCorrectBackground({
                wrapper: item, 
                color: baseColor, 
                opacity: (+item.props().children - minValInItems) / spread
        }))
    });

    describe('should have correct theme when theme prop is passed', () => {
        let ThemeColors = Constants.defaultThemeColors;
        Object.keys(ThemeColors).map(key => {
            it(`${key} theme`, () => {
                const props = {};
                props[key] = true;
                const mountWrapper = mount(<HeatMap {...props} items={items} />);
                mountWrapper.find(HeatMap.Cell).forEach(item => 
                    hasCorrectBackground({
                        wrapper: item, 
                        color: ThemeColors[key].color, 
                        opacity: (+item.props().children - minValInItems) / spread
                }))
            });
        });
    });
});