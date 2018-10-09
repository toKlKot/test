import { Component, OnInit } from '@angular/core';
import {User, Users} from './user.model';
import {Store} from '@ngrx/store';
import {AppState} from '../redux/app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent{
  public users: User[] = [];

  public userState: Observable<Users>;

  constructor(private store: Store<AppState>) {}

  onLoad(user: User) {
    this.userState = this.store.select('userPage');
  }
}

