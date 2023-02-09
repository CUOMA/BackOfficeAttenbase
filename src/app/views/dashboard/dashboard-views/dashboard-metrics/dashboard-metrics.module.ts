import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardMetricsRoutingModule } from './dashboard-metrics-routing.module';
import { DashboardMetricsComponent } from './dashboard-metrics.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  providers: [],
  declarations: [DashboardMetricsComponent],
  imports: [CommonModule, DashboardMetricsRoutingModule, MatButtonModule],
})
export class DashboardMetricsModule {}
