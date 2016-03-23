import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import ContactTable from '../../src/components/ContactTable.jsx';
import ContactRow from '../../src/components/ContactRow.jsx';

let expect = chai.expect;

let mockContact1 = () => {
  return {
    firstName: 'Tomio',
    lastName: 'Mizoroki',
    dob: 'May 31 1986',
    phone: '415-302-7561',
    email: 'tmizoroki@gmail.com',
    notes: 'this is a note'
  };
};

let mockContact2 = () => {
  return {
    firstName: 'John',
    lastName: 'Smith',
    dob: 'Jan 01 1786',
    phone: '415-302-7561',
    email: 'tmizoroki@gmail.com',
    notes: 'this is a note'
  }
}

describe('<ContactTable />', () => {

  it('renders a table with two contacts', () => {
    const rows = [mockContact1(), mockContact1()];
    const text = '';
    const wrapper = shallow(<ContactTable contacts={rows} textToFilter={text} />);
    expect(wrapper.find(ContactRow)).to.have.length(rows.length);
  });

  it('filters contacts that whose first or last names don\'t match the textToFilter text', () => {
    const rows = [mockContact1(), mockContact2()];
    const text = 'Tom';
    const wrapper = shallow(<ContactTable contacts={rows} textToFilter={text} />);
    expect(wrapper.find(ContactRow)).to.have.length(1);
    expect(wrapper.find(ContactRow).props().contact.firstName).to.equal('Tomio');
  })

});
