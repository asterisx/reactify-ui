import React from 'react';
import { mount } from 'enzyme';

export const displaysChildren = (Comp) => { 
    it('should display children prop passed', () => {
        let someClass = "someClass";
        let childElem = <div className={someClass} key={1}></div>;
        const mountWrapper = mount(
        React.cloneElement(Comp, {}, [childElem])
        );
        const childContent = mountWrapper.find(`.${someClass}`);
        expect(childContent).toBeDefined();
    });
}

export const hasDisabledStyle = (Comp) => {
    it('should have disabled style when disabled is passed', () => {
        console.log('[TODO] Disabled tests is to be written')
    });
}