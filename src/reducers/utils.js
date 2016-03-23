import { FILTER_CONTACTS } from '../constants/actionTypes';

const initialState = {
  filterText: ''
}

export default function utils(state = initialState, action) {
  switch (action.type) {
    case FILTER_CONTACTS:
      return Object.assign({}, {filterText: action.text});

    default:
      return state;
  }
}
