import React from 'react';
import { Navbar } from 'react-bootstrap';
import FilterableContactsTable from './FilterableContactsTable.jsx'

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        contacts: [
          {
            firstName: 'Tomio',
            lastName: 'Mizoroki',
            dob: 'May 31 1986',
            phone: '415-302-7561',
            email: 'tmizoroki@gmail.com',
            notes: 'He\'s looking for work as a software developer'
          },
          {
            firstName: 'Victoria',
            lastName: 'Wolseley',
            dob: 'January 25 1987',
            phone: '805-555-5555',
            email: 'victoriawolseley@gmail.com',
            notes: 'Trying to get into a MD/PHd program'
          },
        ]
      }
    }

    render() {
      return (
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                Contacts Keeper
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>

          <div className='container'>
            <FilterableContactsTable contacts={this.state.contacts} />
          </div>
        </div>
      )

    }
}

export default App;
