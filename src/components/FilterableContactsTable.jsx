import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ContactActions from '../actions/ContactActions';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar.jsx';
import AddContact from './AddContact.jsx';
import ContactTable from './ContactTable.jsx';

const FilterableContactsTable = ({ contacts, utils, actions }) =>
  (
    <Grid>
      <Row className='show-grid table-ui'>
        <Col md={4}>
          <SearchBar textToFilter={utils.filterText} filterText={actions.filterContacts} />
        </Col>
        <Col md={4} mdPush={6}>
          <AddContact addContact={actions.addContact} />
        </Col>
      </Row>
      <Row className='show-grid'>
        <Col md={12}>
          <ContactTable contacts={contacts} textToFilter={utils.filterText} />
        </Col>
      </Row>
    </Grid>
  );

function mapState(state) {
  return {
    contacts: state.contacts,
    utils: state.utils
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(ContactActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(FilterableContactsTable);
