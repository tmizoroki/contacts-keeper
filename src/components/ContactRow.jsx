import React, { PropTypes } from 'react';

const ContactRow = ({contact}) => {
  const {firstName, lastName, dob, phone, email, notes} = contact;
  
  return (
    <tr>
      <td className="firstName">{firstName}</td>
      <td className="lastName">{lastName}</td>
      <td className="dob">{dob}</td>
      <td className="phone">{phone}</td>
      <td className="email">{email}</td>
      <td className="notes">{notes}</td>
    </tr>
  );
}

ContactRow.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactRow;
