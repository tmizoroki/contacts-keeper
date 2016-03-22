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

            <Modal
              show={this.state.show}
              onHide={close}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">Contacts Keeper</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <Row>
                    <Col md={5}>
                    <Input
                      type="text"
                      label="First Name"
                      name="firstName"
                      value={this.state.contactForm.firstName}
                      onChange={this.handleChange.bind(this)}
                    />
                    </Col>
                    <Col md={5} mdPush={2}>
                    <Input
                      type="text"
                      label="Last Name"
                      name="lastName"
                      value={this.state.contactForm.lastName}
                      onChange={this.handleChange.bind(this)}
                    />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={5}>
                    <Input
                      type="date"
                      label="Date of Birth"
                      name="dob"
                      value={this.state.contactForm.dob}
                      onChange={this.handleChange.bind(this)}
                    />
                    </Col>
                    <Col md={5} mdPush={2}>
                    <Input
                      type="tel"
                      label="Phone Number"
                      name="phone"
                      value={this.state.contactForm.phone}
                      onChange={this.handleChange.bind(this)}
                    />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={5}>
                    <Input
                      type="email"
                      label="Email"
                      name="email"
                      value={this.state.contactForm.email}
                      onChange={this.handleChange.bind(this)}
                    />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                    <Input
                      type="textarea"
                      label="Notes"
                      name="notes"
                      value={this.state.contactForm.notes}
                      onChange={this.handleChange.bind(this)}
                    />
                    </Col>
                  </Row>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleSubmit.bind(this)}>Save</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
    }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
}

export default AddContact;
