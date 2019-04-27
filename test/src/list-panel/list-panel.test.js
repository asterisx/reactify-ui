import React from 'react';
import { ListPanel } from 'reactify';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';

chai.should();
chai.use(chaiEnzyme())

describe('ListPanel Component', () => {
    it('renders correctly', () => {
        const shallowWrapper = shallow(<ListPanel />);
        expect(shallowWrapper).not.be.null;
    })

    it("should display children prop passed", () => {
        let someClass = "someClass";
        let childElem = <div className={someClass} />;
        const shallowWrapper = shallow(<ListPanel>{childElem}</ListPanel>);
        const childContent = shallowWrapper.find(`.${someClass}`);
        expect(childContent).not.be.null;
    });

    describe('props', () => {
        it('should call onSelectionChange function when List Panel item is clicked', () => {
            const selectionCallback = sinon.spy();
            const mountWrapper = mount(<ListPanel onSelectionChange={selectionCallback}><ListPanel.Item index={1}></ListPanel.Item></ListPanel>);
            mountWrapper.find('.reactify-list-panel__list-item').simulate('click');
            expect(selectionCallback.called).to.be.true;
        });

        describe('mode', () => {
            it('in singular mode can only select one item', () =>{
                const mountWrapper = mount(
                    <ListPanel>
                        <ListPanel.Item  index={1}>Item 1</ListPanel.Item>
                        <ListPanel.Item  index={2}>Item 2</ListPanel.Item>
                        <ListPanel.Item  index={3}>Item 3</ListPanel.Item>
                    </ListPanel>
                );

                const items = mountWrapper.find(ListPanel.Item);

                const firstItem = items.at(0);
                const secondItem = items.at(1);
                const thirdItem = items.at(2);

                firstItem.simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).to.be.true;
                    expect(secondItem.props().selected).to.be.false;
                    expect(thirdItem.props().selected).to.be.false;
                }, 0);

                secondItem.simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).to.be.false;
                    expect(secondItem.props().selected).to.be.true;
                    expect(thirdItem.props().selected).to.be.false;
                }, 0);

                thirdItem.simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).to.be.false;
                    expect(secondItem.props().selected).to.be.false;
                    expect(thirdItem.props().selected).to.be.true;
                }, 0);
            });

            it('in multiple mode can select all item', () =>{
                const mountWrapper = mount(
                    <ListPanel mode="multiple">
                        <ListPanel.Item index={1}>Item 1</ListPanel.Item>
                        <ListPanel.Item index={2}>Item 2</ListPanel.Item>
                        <ListPanel.Item index={3}>Item 3</ListPanel.Item>
                    </ListPanel>
                );

                const items = mountWrapper.find(ListPanel.Item);

                const firstItem = items.at(0);
                const secondItem = items.at(1);
                const thirdItem = items.at(2);

                firstItem.childAt(0).simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).to.be.true;
                    expect(secondItem.props().selected).to.be.false;
                    expect(thirdItem.props().selected).to.be.false;
                }, 0)
              

                secondItem.simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).to.be.true;
                    expect(secondItem.props().selected).to.be.true;
                    expect(thirdItem.props().selected).to.be.false;
                }, 0);

                thirdItem.simulate('click');

                setTimeout(() => {
                    expect(firstItem.props().selected).to.be.true;
                    expect(secondItem.props().selected).to.be.true;
                    expect(thirdItem.props().selected).to.be.true;
                }, 0);
            });
        })

        it('should have disabled class when disabled prop is passed', () => {
            const shallowWrapper = shallow(<ListPanel disabled />);
            expect(shallowWrapper.hasClass('reactify--disabled')).to.be.true;
        });

        it('should have custom color when color prop is passed and drill it in', () => {
            const color = "violet"
            const shallowWrapper = mount(<ListPanel color={color}><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
            const listItem = shallowWrapper.find('.reactify-list-panel__list-item');
            expect(listItem.props().style['backgroundColor']).to.equal(color);
        });

        it('should have correct size passed as props and should drill it to List Items', () => {
            const shallowWrapper = mount(<ListPanel size="small"><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
            const listItem = shallowWrapper.find('.reactify-list-panel__list-item');
            expect(listItem.hasClass('reactify-list-panel__list-item--size-small')).to.be.true;

            const shallowWrapper1 = mount(<ListPanel size="medium"><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
            const listItem1 = shallowWrapper1.find('.reactify-list-panel__list-item');
            expect(listItem1.hasClass('reactify-list-panel__list-item--size-medium')).to.be.true;

            const shallowWrapper2 = mount(<ListPanel size="large"><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
            const listItem2 = shallowWrapper2.find('.reactify-list-panel__list-item');
            expect(listItem2.hasClass('reactify-list-panel__list-item--size-large')).to.be.true;

            const fontSize = "40px";
            const shallowWrapper3 = mount(<ListPanel size={fontSize}><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
            const listItem3 = shallowWrapper3.find('.reactify-list-panel__list-item');
            expect(listItem3.props().style['fontSize']).to.equal(fontSize);
        });
 
        describe('should have correct theme when theme prop is passed and drill it in to List items', () => {
            it('default theme', () => {
                const shallowWrapper = mount(<ListPanel  theme="default"><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
                expect(shallowWrapper.childAt(0).hasClass('reactify-list-panel--theme-default')).to.be.true;

                const listItem = shallowWrapper.find('.reactify-list-panel__list-item');
                expect(listItem.hasClass('reactify-list-panel__list-item--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = mount(<ListPanel  theme="dark"><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
                expect(shallowWrapper.childAt(0).hasClass('reactify-list-panel--theme-dark')).to.be.true;

                const listItem = shallowWrapper.find('.reactify-list-panel__list-item');
                expect(listItem.hasClass('reactify-list-panel__list-item--theme-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = mount(<ListPanel  theme="light"><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
                expect(shallowWrapper.childAt(0).hasClass('reactify-list-panel--theme-light')).to.be.true;

                const listItem = shallowWrapper.find('.reactify-list-panel__list-item');
                expect(listItem.hasClass('reactify-list-panel__list-item--theme-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = mount(<ListPanel  theme="info"><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
                expect(shallowWrapper.childAt(0).hasClass('reactify-list-panel--theme-info')).to.be.true;

                const listItem = shallowWrapper.find('.reactify-list-panel__list-item');
                expect(listItem.hasClass('reactify-list-panel__list-item--theme-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = mount(<ListPanel  theme="warning"><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
                expect(shallowWrapper.childAt(0).hasClass('reactify-list-panel--theme-warning')).to.be.true;

                const listItem = shallowWrapper.find('.reactify-list-panel__list-item');
                expect(listItem.hasClass('reactify-list-panel__list-item--theme-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = mount(<ListPanel  theme="danger"><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
                expect(shallowWrapper.find('.reactify-list-panel__container').hasClass('reactify-list-panel--theme-danger')).to.be.true;

                const listItem = shallowWrapper.find('.reactify-list-panel__list-item');
                expect(listItem.hasClass('reactify-list-panel__list-item--theme-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = mount(<ListPanel  theme="success"><ListPanel.Item index={1}>Item</ListPanel.Item></ListPanel>);
                expect(shallowWrapper.childAt(0).hasClass('reactify-list-panel--theme-success')).to.be.true;

                const listItem = shallowWrapper.find('.reactify-list-panel__list-item');
                expect(listItem.hasClass('reactify-list-panel__list-item--theme-success')).to.be.true;
            });
        });
    });

    describe('ListPanel.Item Component', () => {
        it('renders correctly', () => {
            const shallowWrapper = shallow(<ListPanel.Item  index={1}/>);
            expect(shallowWrapper).not.be.null;
        });

        it('renders correctly', () => {
            const onClickCallback = sinon.spy();
            const shallowWrapper = shallow(<ListPanel.Item onClick={onClickCallback}  index={1}/>);
            shallowWrapper.simulate('click');
            expect(onClickCallback.called).to.be.true;
        });
    
        it("should display children prop passed", () => {
            let someClass = "someClass";
            let childElem = <div className={someClass} />;
            const shallowWrapper = shallow(<ListPanel.Item  index={1}>{childElem}</ListPanel.Item>);
            const childContent = shallowWrapper.find(`.${someClass}`);
            expect(childContent).not.be.null;
        });
    
        it('should have border when border prop is passed', () => {
            const shallowWrapper = shallow(<ListPanel.Item bordered  index={1}/>);
            expect(shallowWrapper.hasClass('reactify-list-panel__list-item--bordered')).to.be.true;

            const shallowWrapper1 = shallow(<ListPanel.Item bordered={false}  index={1}/>);
            expect(shallowWrapper1.hasClass('reactify-list-panel__list-item--bordered')).to.be.false;
        });

        it('should have selected when selected prop is passed', () => {
            const shallowWrapper = shallow(<ListPanel.Item selected theme="default"  index={1}/>);
            expect(shallowWrapper.hasClass('reactify-list-panel__list-item--theme-default-selected')).to.be.true;

            const shallowWrapper1 = shallow(<ListPanel.Item theme="default"  index={1}/>);
            expect(shallowWrapper1.hasClass('reactify-list-panel__list-item--theme-default-selected')).to.be.false;
        });

        describe('should have correct theme when theme prop is passed', () => {
            it('default theme', () => {
                const shallowWrapper = shallow(<ListPanel.Item  theme="default"  index={1}/>);
                expect(shallowWrapper.hasClass('reactify-list-panel__list-item--theme-default')).to.be.true;
            });
            it('dark theme', () => {
                const shallowWrapper = shallow(<ListPanel.Item  theme="dark"  index={1}/>);
                expect(shallowWrapper.hasClass('reactify-list-panel__list-item--theme-dark')).to.be.true;
            });
            it('light theme', () => {
                const shallowWrapper = shallow(<ListPanel.Item  theme="light"  index={1}/>);
                expect(shallowWrapper.hasClass('reactify-list-panel__list-item--theme-light')).to.be.true;
            });
            it('info theme', () => {
                const shallowWrapper = shallow(<ListPanel.Item  theme="info"  index={1}/>);
                expect(shallowWrapper.hasClass('reactify-list-panel__list-item--theme-info')).to.be.true;
            });
            it('warning theme', () => {
                const shallowWrapper = shallow(<ListPanel.Item  theme="warning"  index={1}/>);
                expect(shallowWrapper.hasClass('reactify-list-panel__list-item--theme-warning')).to.be.true;
            });
            it('danger theme', () => {
                const shallowWrapper = shallow(<ListPanel.Item  theme="danger"  index={1}/>);
                expect(shallowWrapper.hasClass('reactify-list-panel__list-item--theme-danger')).to.be.true;
            });
            it('success theme', () => {
                const shallowWrapper = shallow(<ListPanel.Item  theme="success"  index={1}/>);
                expect(shallowWrapper.hasClass('reactify-list-panel__list-item--theme-success')).to.be.true;
            });
        });

        it('should have custom color when color prop is passed', () => {
            const color = "violet"
            const shallowWrapper = shallow(<ListPanel.Item color={color}  index={1}/>);
            expect(shallowWrapper.props().style['backgroundColor']).to.equal(color);
        });

        it('should have correct size passed as props and should drill it to List Items', () => {
            const shallowWrapper = shallow(<ListPanel.Item size="small"  index={1}/>);
            expect(shallowWrapper.hasClass('reactify-list-panel__list-item--size-small')).to.be.true;

            const shallowWrapper1 = shallow(<ListPanel.Item size="medium"  index={1}/>);
            expect(shallowWrapper1.hasClass('reactify-list-panel__list-item--size-medium')).to.be.true;

            const shallowWrapper2 = shallow(<ListPanel.Item size="large"  index={1}/>);
            expect(shallowWrapper2.hasClass('reactify-list-panel__list-item--size-large')).to.be.true;


            const fontSize = "40px";
            const shallowWrapper3 = shallow(<ListPanel.Item size={fontSize}  index={1}/>);
            expect(shallowWrapper3.props().style['fontSize']).to.equal(fontSize);
        });
    });
});