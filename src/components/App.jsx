import React from 'react';
import { Provider } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import FilterableContactsTable from './FilterableContactsTable.jsx';

const App = ({ store }) => 
  (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Contacts Keeper
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      <Provider store={store}>
          <FilterableContactsTable />
      </Provider>
    </div>
  );  

export default App;
