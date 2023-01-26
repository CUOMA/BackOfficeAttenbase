import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DashboardFacade } from '../dashboard.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'bdc-bo-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  constructor(private dashboardFacade: DashboardFacade, private router: Router) {}
  protected handleLogOut(): void {
    this.dashboardFacade.logOut();
  }
}