import { SAVE_FIRST_NAME, SAVE_LAST_NAME, ADD_PERSON, RESET_PERSON } from '../constants/peopleActionTypes';

export const saveFirstName = firstName => ({ type: SAVE_FIRST_NAME, payload: firstName});
export const saveLastName = lastName => ({ type: SAVE_LAST_NAME, payload: lastName});
export const addPersonToList = person => ({ type: ADD_PERSON, payload: person});
export const resetPerson = () => ({ type: RESET_PERSON});