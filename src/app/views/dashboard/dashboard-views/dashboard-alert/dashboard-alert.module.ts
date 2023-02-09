import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardAlertRoutingModule } from './dashboard-alert-routing.module';
import { DashboardAlertComponent } from './dashboard-alert.component';

@NgModule({
  providers: [],
  declarations: [DashboardAlertComponent],
  imports: [CommonModule, DashboardAlertRoutingModule],
})
export class DashboardAlertModule {}
