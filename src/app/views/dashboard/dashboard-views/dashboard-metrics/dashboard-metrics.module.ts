import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardMetricsRoutingModule } from './dashboard-metrics-routing.module';
import { DashboardMetricsComponent } from './dashboard-metrics.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LineChartMetricsModule } from './line-chart-metrics/line-chart-metrics.module';
import { MetricsTableComponent } from './metrics-table/metrics-table.component';

@NgModule({
  providers: [],
  declarations: [DashboardMetricsComponent, MetricsTableComponent],
  imports: [CommonModule, SharedModule, DashboardMetricsRoutingModule, LineChartMetricsModule],
})
export class DashboardMetricsModule {}
