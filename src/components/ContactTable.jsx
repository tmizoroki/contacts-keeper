import React, { PropTypes } from 'react';
import ContactRow from './ContactRow.jsx'

const ContactTable = ({contacts}) => {
  let rows = contacts.map(contact => {
    return (
      <ContactRow 
        contact={contact}
        key={contact.phone}
      />
    );
  });

  return (
    <table>
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
    </table>
  );
}

ContactTable.propTypes = {
  contacts: PropTypes.array.isRequired
}

export default ContactTable;
