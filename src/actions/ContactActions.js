import * as types from '../constants/actionTypes';

export function addContact(contact) {
  return {
    type: types.ADD_CONTACT,
    contact
  };
}

export function filterContacts(text) {
  return {
    type: types.FILTER_CONTACTS,
    text
  };
}