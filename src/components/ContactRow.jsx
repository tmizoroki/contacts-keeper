import React from 'react';

const ContactRow = (props) => {
  const {firstName, lastName, dob, phone, email, notes} = props.contact;
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

export default ContactRow;
