import React from 'react';
import SearchBar from './SearchBar.jsx'
import AddContact from './AddContact.jsx'
import ContactTable from './ContactTable.jsx'

const FilterableContactsTable = (props) => {
  return (
    <div>
      <SearchBar />
      <AddContact />
      <ContactTable contacts={props.contacts} />
    </div>
  );
}

export default FilterableContactsTable;
