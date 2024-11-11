import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS
  SelectedUserId?: string
  addedTask?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.SelectedUserId);
  }

  onSelectUser(id: string) {
    this.SelectedUserId = id;
  }
}
