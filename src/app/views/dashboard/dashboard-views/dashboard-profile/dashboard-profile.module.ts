import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardProfileRoutingModule } from './dashboard-profile-routing.module';
import { DashboardProfileComponent } from './dashboard-profile.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  providers: [],
  declarations: [DashboardProfileComponent],
  imports: [CommonModule, DashboardProfileRoutingModule, MatButtonModule],
})
export class DashboardProfileModule {}
