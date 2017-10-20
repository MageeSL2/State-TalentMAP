import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import toJSON from 'enzyme-to-json';
import EditContentButton from './EditContentButton';

describe('EditContentButtonComponent', () => {
  it('is defined', () => {
    const wrapper = shallow(
      <EditContentButton onToggle={() => {}} />,
    );
    expect(wrapper).toBeDefined();
  });

  it('can be clicked', () => {
    const spy = sinon.spy();
    const wrapper = shallow(
      <EditContentButton onToggle={spy} />,
    );
    wrapper.find('FontAwesome').simulate('click');
    sinon.assert.calledOnce(spy);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <EditContentButton onToggle={() => {}} />,
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
