import ContactRow from './ContactRow.jsx'

const ContactTable = (props) => {
  let rows = props.contacts.map(contact => 
    (
      <ContactRow 
        firstName={contact.firstName}
        lastName={contact.lastName}
        dob={contact.dob}
        phone={contact.phone}
        email={contact.email}
        notes={contact.notes}
        key={contact.phone}
      />
    )  
  );
  
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