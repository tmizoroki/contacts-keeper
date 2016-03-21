import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar.jsx';
import AddContact from './AddContact.jsx';
import ContactTable from './ContactTable.jsx';

class FilterableContactsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      contacts: []
    }
  }

  handleUserInput(filterText) {
    this.setState({
      filterText
    });
  };

  handleContact(contactForm) {
    this.setState({
      contacts: this.state.contacts.concat(contactForm)
    });
  };

  render() {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col md={4}>
            <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
          </Col>
          <Col md={4} mdPush={6}>
            <AddContact onFormSubmit={this.handleContact.bind(this)} />
          </Col>
        </Row>
        <Row className='show-grid'>
          <Col md={12}>
            <ContactTable contacts={this.state.contacts} filterText={this.state.filterText} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default FilterableContactsTable;
