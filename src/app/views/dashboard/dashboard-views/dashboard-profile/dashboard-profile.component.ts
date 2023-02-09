import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bdc-bo-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss'],
})
export class DashboardProfileComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {
    console.log('Sinonimos');
  }
}
