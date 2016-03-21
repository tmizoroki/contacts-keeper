import React from 'react';
import { Button, Modal, Input, ButtonInput } from 'react-bootstrap';

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    render() {
        let close = () => this.setState({ show:false });
        let save;

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
                  <Input type="text" label="First Name" placeholder="" />
                  <Input type="text" label="Last Name" placeholder="" />
                  <Input type="date" label="Date of Birth" placeholder="" />
                  <Input type="tel" label="Phone Number" placeholder="" />
                  <Input type="email" label="Email" placeholder="" />
                  <Input type="textarea" label="Notes" placeholder="" />
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

export default AddContact;
