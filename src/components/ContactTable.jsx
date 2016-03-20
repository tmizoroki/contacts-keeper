import React from 'react';
import ContactRow from './ContactRow.jsx'

const ContactTable = (props) => {
  let rows = props.contacts.map(contact => {
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

export default ContactTable;
