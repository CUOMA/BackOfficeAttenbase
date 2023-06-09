import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardMetricsRoutingModule } from './dashboard-metrics-routing.module';
import { DashboardMetricsComponent } from './dashboard-metrics.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  providers: [],
  declarations: [DashboardMetricsComponent],
  imports: [CommonModule, SharedModule, DashboardMetricsRoutingModule, MatButtonModule],
})
export class DashboardMetricsModule {}
