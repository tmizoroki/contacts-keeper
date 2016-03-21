import React, { PropTypes } from 'react';
import SearchBar from './SearchBar.jsx'
import AddContact from './AddContact.jsx'
import ContactTable from './ContactTable.jsx'

const FilterableContactsTable = ({contacts}) => {
  return (
    <div>
      <SearchBar />
      <AddContact />
      <ContactTable contacts={contacts} />
    </div>
  );
}

FilterableContactsTable.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default FilterableContactsTable;
