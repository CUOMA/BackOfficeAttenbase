import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAlertComponent } from './dashboard-alert.component';

const routes: Routes = [{ path: '', component: DashboardAlertComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardAlertRoutingModule {}
