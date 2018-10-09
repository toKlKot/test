import {st} from '@angular/core/src/render3';

export class User {
  constructor(
    public login: string,
    public password: string,
    public id?: number
  ) {}
}
export interface Users {
  users: User[];
}
