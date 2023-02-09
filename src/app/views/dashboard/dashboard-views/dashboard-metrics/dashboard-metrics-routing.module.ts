import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMetricsComponent } from './dashboard-metrics.component';

const routes: Routes = [{ path: '', component: DashboardMetricsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardMetricsRoutingModule {}
