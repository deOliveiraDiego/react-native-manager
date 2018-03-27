import { EMPLOYEE_UPDATE } from '../actions/types'
import { action } from 'mobx';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, actions) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
}