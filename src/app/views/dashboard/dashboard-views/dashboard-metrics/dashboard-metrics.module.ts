import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardMetricsRoutingModule } from './dashboard-metrics-routing.module';
import { DashboardMetricsComponent } from './dashboard-metrics.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { LineChartMetricsModule } from './line-chart-metrics/line-chart-metrics.module';
import { MetricsTableComponent } from './metrics-table/metrics-table.component';
import { StatusQuestionComponent } from './metrics-table/status-question/status-question.component';

@NgModule({
  providers: [],
  declarations: [DashboardMetricsComponent, MetricsTableComponent, StatusQuestionComponent],
  imports: [CommonModule, SharedModule, DashboardMetricsRoutingModule, LineChartMetricsModule],
})
export class DashboardMetricsModule {}
