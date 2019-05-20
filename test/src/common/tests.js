import React from 'react';
import { shallow } from 'enzyme';

export const displaysChildren = (Comp) => { 
    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass} key={1}></div>;
        const shallowWrapper = shallow(
        React.cloneElement(Comp, {}, [childElem])
        );
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent).toBeDefined();
    });
}

export const hasDisabledStyle = (Comp) => {
    it('should have disabled style when disabled is passed', () => {

    });
}