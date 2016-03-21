import React from 'react';
import { Navbar } from 'react-bootstrap';
import FilterableContactsTable from './FilterableContactsTable.jsx'

const App = () =>
  (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Contacts Keeper
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>

      <div className='container'>
        <FilterableContactsTable />
      </div>
    </div>
  )

export default App;
