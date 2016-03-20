import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import ContactTable from '../../src/components/ContactTable.jsx';
import ContactRow from '../../src/components/ContactRow.jsx';

let expect = chai.expect;

function mockRows() {
  return [
    {
      firstName: 'Tomio',
      lastName: 'Mizoroki',
      dob: 'May 31 1986',
      phone: '415-302-7561',
      email: 'tmizoroki@gmail.com',
      notes: 'this is a note'
    },
    {
      firstName: 'Tomio',
      lastName: 'Mizoroki',
      dob: 'May 31 1986',
      phone: '415-302-7561',
      email: 'tmizoroki@gmail.com',
      notes: 'this is a note'
    }
  ]
}

describe('<ContactTable />', () => {

  it('renders a table with two contacts', () => {
    const rows = mockRows();
    const wrapper = shallow(<ContactTable contacts={rows} />);
    expect(wrapper.find(ContactRow)).to.have.length(2);
  });

});
