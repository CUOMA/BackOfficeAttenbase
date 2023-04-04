import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DashboardFacade } from '../dashboard.facade';

@Component({
  selector: 'bdc-bo-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  public isOpen: boolean = false;
  constructor(
    private dashboardFacade: DashboardFacade,
    private router: Router,
    private store: Store
  ) {}

  protected handleLogOut(): void {
    this.dashboardFacade.logOut();
  }

  protected menuOpen() {
    this.isOpen = !this.isOpen;
  }
}
