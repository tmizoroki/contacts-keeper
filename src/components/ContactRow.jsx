const ContactRow = (props) =>
  (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.dob}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.notes}</td>
    </tr>
  );

export default ContactRow;
