import {User} from '../sing-in/user.model';

export interface AppState {
  userPage: {
    users: User[];
  }
}
