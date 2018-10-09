import {Action} from '@ngrx/store';
import {User} from '../sing-in/user.model';

export namespace USER_ACTION {
  export const ADD_USER = 'ADD_USER';
  export const LOAD_USER = 'LOAD_USER';
}

export class AddUser implements Action {
  readonly type = USER_ACTION.ADD_USER;
  constructor(private payload: User) {}
}
