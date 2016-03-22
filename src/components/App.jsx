import React from 'react';
import { Provider } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import FilterableContactsTable from './FilterableContactsTable.jsx';

const App = ({ store }) => 
  (
    <div>
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Contacts Keeper
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </header>
      <div className="container">
        <Provider store={store}>
            <FilterableContactsTable />
        </Provider>
        <footer>
        </footer>
      </div>
    </div>
  );  

export default App;
