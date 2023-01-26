import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardCategoriesRoutingModule } from './dashboard-categories-routing.module';
import { DashboardCategoriesComponent } from './dashboard-categories.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  providers: [],
  declarations: [DashboardCategoriesComponent],
  imports: [CommonModule, DashboardCategoriesRoutingModule, MatButtonModule],
})
export class DashboardCategoriesModule {}
