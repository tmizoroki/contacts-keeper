import React from 'react';
import { shallow } from 'enzyme';
import AddContact from '../../src/components/AddContact.jsx';
import chai from 'chai';

let expect = chai.expect;

describe('<AddContact />', () => {
  it('submits the contact form', () => {
    const onSaveClick = sinon.spy();
    const wrapper = shallow(<AddContact addContact={onSaveClick} />);
    wrapper.find('.save-button').simulate('click');
    expect(onSaveClick.calledOnce).to.equal(true);
  });
});
