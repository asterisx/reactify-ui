import React from 'react';
import { FileUpload } from '@../../../../reactify/build';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { displaysChildren, hasDisabledStyle } from '../../helpers';

describe('HeatMap.Row Component', () => {
    it('renders correctly', () => {
        const mountWrapper = mount(<FileUpload />);
        expect(mountWrapper).toBeDefined();
    });

    displaysChildren(<FileUpload />);

    hasDisabledStyle(<FileUpload />);

    it('calls callback with correct files', () => {
        const onChange = sinon.spy();
        const mountWrapper = mount(<FileUpload onChange={onChange} />);
        const divElem = mountWrapper.find('div').at(1);
        const mockFiles = {
            0: {

            },
            1: {

            },
            length: 2,
        }
        let mockEvent = { dataTransfer: { files: mockFiles } };
        divElem.simulate('drop', mockEvent);
        expect(onChange.called).toBeTruthy();
        expect(onChange.firstCall.args[0].files).toEqual(
            Object.values(mockFiles)
            .map(value => value)
            .filter(value => typeof value === 'object')
        );
    });

    describe('props', () => {
        it('clickable makes it able to upload files just by clicking', () => {
            const onChange = sinon.spy();
            const mountWrapper = mount(<FileUpload clickable onChange={onChange} />);
            const mockFiles = {
                0: {
    
                },
                1: {
    
                },
                length: 2,
            }

            /**
             * Clicking on the div, explicitly triggers a click
             * on a hidden input type="file" which then opens a file chooser
             */
            let mockEvent = { target: { files: mockFiles } };
            const inputElem = mountWrapper.find('input');
            inputElem.simulate('change', mockEvent);
            expect(onChange.called).toBeTruthy();
            expect(onChange.firstCall.args[0].files).toEqual(
                Object.values(mockFiles)
                .map(value => value)
                .filter(value => typeof value === 'object')
            );
        });
    })
});