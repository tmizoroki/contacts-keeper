import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar.jsx';
import AddContact from './AddContact.jsx';
import ContactTable from './ContactTable.jsx';

const FilterableContactsTable = ({contacts}) => {
  return (
    <Grid>
      <Row className='show-grid'>
        <Col md={4}>
          <SearchBar />
        </Col>
        <Col md={4} mdPush={6}>
          <AddContact />
        </Col>
      </Row>
      <Row className='show-grid'>
        <Col md={12}>
          <ContactTable contacts={contacts} />
        </Col>
      </Row>
    </Grid>
  );
}

FilterableContactsTable.propTypes = {
    contacts: PropTypes.array.isRequired
}

export default FilterableContactsTable;
