import {Action} from '@ngrx/store';
import {User} from '../sing-in/user.model';
import {AddUser, USER_ACTION} from './users.action';

const initialState = {
  users: [
    new User('admin', 'admin')
  ]
}

export function userReducer(state = initialState, action: AddUser) {
  switch (action.type) {
    case USER_ACTION.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
}
