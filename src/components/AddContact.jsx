import React, { PropTypes } from 'react';
import { Button, Modal, Input, ButtonInput } from 'react-bootstrap';

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

    render() {
        let close = () => this.setState({ show:false });
        let save = () => {
          this.props.onFormSubmit(this.state.contactForm);
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

        return (
          <div className="modal-container">
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={() => this.setState({ show: true})}
            >
              Contacts Keeper
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
                  <Input
                    type="text"
                    label="First Name"
                    name="firstName"
                    value={this.state.contactForm.firstName}
                    onChange={this.handleChange.bind(this)}
                  />
                  <Input
                    type="text"
                    label="Last Name"
                    name="lastName"
                    value={this.state.contactForm.lastName}
                    onChange={this.handleChange.bind(this)}
                  />
                  <Input
                    type="date"
                    label="Date of Birth"
                    name="dob"
                    value={this.state.contactForm.dob}
                    onChange={this.handleChange.bind(this)}
                  />
                  <Input
                    type="tel"
                    label="Phone Number"
                    name="phone"
                    value={this.state.contactForm.phone}
                    onChange={this.handleChange.bind(this)}
                  />
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    value={this.state.contactForm.email}
                    onChange={this.handleChange.bind(this)}
                  />
                  <Input
                    type="textarea"
                    label="Notes"
                    name="notes"
                    value={this.state.contactForm.notes}
                    onChange={this.handleChange.bind(this)}
                  />
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={save}>Save</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
    }
}

AddContact.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
}

export default AddContact;
