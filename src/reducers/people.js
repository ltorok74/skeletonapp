import {
  SAVE_FIRST_NAME,
  SAVE_LAST_NAME,
  ADD_PERSON,
  RESET_PERSON
} from "../constants/peopleActionTypes";

const initialState = {
  person: {
    firstName: '',
    lastName: ''
  },
  list: []
};

export const people = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SAVE_FIRST_NAME:
      newState.person.firstName = action.payload;
      return newState;
    case SAVE_LAST_NAME:
      newState.person.lastName = action.payload;
      return newState;
    case ADD_PERSON:
      const person = { ...action.payload };
      newState.list.push(person);
      return newState;
    case RESET_PERSON:
      newState.person.firstName = '';
      newState.person.lastName = '';
      return newState;
    default:
      return state;
  }
};
