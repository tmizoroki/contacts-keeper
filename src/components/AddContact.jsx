import React, { PropTypes } from 'react';
import { Button, Modal, Glyphicon, Input, Row, Col } from 'react-bootstrap';

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          show: false,
          contactForm: {
            firstName: "",
            lastName: "",
            dob: "",
            phone: "",
            email: "",
            notes: ""
          }
        };
    }

    handleChange(e) {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState({contactForm: Object.assign(this.state.contactForm, nextState)});
    }

    handleSubmit(e) {
      const contact = this.state.contactForm;
      this.props.addContact(contact);
      this.setState({
        show: false,
        contactForm: {
          firstName: "",
          lastName: "",
          dob: "",
          phone: "",
          email: "",
          notes: ""
        }
      });
    }

    closeModal() { this.setState({ show: false}); }

    render() {
        let close = () => this.closeModal();

        return (
          <div className="modal-container">
            <Button
              bsStyle="primary"
              onClick={() => this.setState({ show: true})}
              className="add-contact-button"
            >
              <Glyphicon glyph="plus-sign" />Contacts Keeper
            </Button>


          </div>
        );
    }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
}

export default AddContact;
