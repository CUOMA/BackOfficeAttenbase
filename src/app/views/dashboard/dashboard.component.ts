import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { DashboardFacade } from './dashboard.facade';

@Component({
  selector: 'bdc-bo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(protected router: Router, private dashboardFacade: DashboardFacade) {}

  public ngOnInit(): void {
    this.dashboardFacade.isAuthenticated
      .pipe(finalize(() => this.router.navigateByUrl('login')))
      .subscribe();
  }
}
