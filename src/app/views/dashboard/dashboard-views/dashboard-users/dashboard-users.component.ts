import { Component, OnInit } from '@angular/core';
import { UsersFacade } from './dashboard-users.facade';

@Component({
  selector: 'bdc-bo-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss'],
})
export class DashboardUsersComponent implements OnInit {
  protected users$ = this.usersFacade.selectUsers();
  constructor(public usersFacade: UsersFacade) {}
  ngOnInit(): void {
    this.usersFacade.dispatchGetUsers();
  }
}
