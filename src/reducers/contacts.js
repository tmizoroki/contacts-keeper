import { ADD_CONTACT } from '../constants/ActionTypes';

const initialState = [{
  firstName: 'Tomio',
  lastName: 'Mizoroki',
  dob: '1986 05 31',
  phone: '415-302-7561',
  email: 'tmizoroki@gmail.com',
  notes: 'Currently unemployed software developer',
  id: 0
}];

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      let {firstName, lastName, dob, phone, email, notes} = action.contact;
      return [...state, {
        id: (state.length === 0) ? 0 : state[state.length - 1].id + 1,
        firstName,
        lastName,
        dob,
        phone,
        email,
        notes
      }];

    default:
      return state;
  }
}