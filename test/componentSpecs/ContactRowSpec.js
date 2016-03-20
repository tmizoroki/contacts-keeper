import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import lodash from 'lodash';
import ContactRow from '../../src/components/ContactRow.jsx';

let expect = chai.expect;

function mockContact() {
  return {
    firstName: 'Tomio',
    lastName: 'Mizoroki',
    dob: 'May 31 1986',
    phone: '415-302-7561',
    email: 'tmizoroki@gmail.com',
    notes: 'this is a note'
  }
}

describe('<ContactRow />', () => {

  it('renders a row with six columns', () => {
    const contact = mockContact();
    const wrapper = shallow(<ContactRow contact={contact} />);
    expect(wrapper.find('tr')).to.have.length(1);
    expect(wrapper.find('td')).to.have.length(6);
  });

  it('renders a row with the correct data', () => {
    const contact = mockContact();
    const wrapper = shallow(<ContactRow contact={contact} />);
    _.each(contact, (val, key) => {
      expect(wrapper.find('.' + key).text()).to.equal(val);
    });
  });


});
