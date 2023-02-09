import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bdc-bo-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss'],
})
export class DashboardUsersComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {
    console.log('Sinonimos');
  }
}
