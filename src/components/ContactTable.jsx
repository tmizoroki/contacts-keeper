import React, { PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import ContactRow from './ContactRow.jsx';

const ContactTable = ({contacts, textToFilter}) => {
  // Filter out the rows where the first and last names don't match the text in the search bar.
  let rows = contacts.map(contact => {
    if (contact.firstName.indexOf(textToFilter) === -1
      && contact.lastName.indexOf(textToFilter) === -1) {
      return;
    }
    return (
      <ContactRow 
        contact={contact}
        key={contact.id}
      />
    );
  });

  return (
    <Table bordered hover className="contact-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

ContactTable.propTypes = {
  contacts: PropTypes.array.isRequired,
  textToFilter: PropTypes.string
}

export default ContactTable;
