import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardProfileComponent } from './dashboard-profile.component';

const routes: Routes = [{ path: '', component: DashboardProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardProfileRoutingModule {}
