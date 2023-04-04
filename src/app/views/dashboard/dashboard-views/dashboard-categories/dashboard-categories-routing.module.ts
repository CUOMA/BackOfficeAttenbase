import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCategoriesComponent } from './dashboard-categories.component';
import { DashboardDetailCategoriesComponent } from './detail-category/dashboard-detail-categories.component';

const routes: Routes = [
  { path: '', component: DashboardCategoriesComponent },
  { path: 'detalle', component: DashboardDetailCategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardCategoriesRoutingModule {}
