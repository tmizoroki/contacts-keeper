import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App.jsx';
import FilterableContactsTable from '../../src/components/FilterableContactsTable.jsx'
import chai from 'chai';

let expect = chai.expect;

describe('<App />', () => {
  it('renders a <FilterableContactsTable /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(FilterableContactsTable)).to.have.length(1);
  });
});
