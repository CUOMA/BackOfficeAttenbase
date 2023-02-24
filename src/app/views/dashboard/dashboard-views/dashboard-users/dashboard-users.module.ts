import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardUsersRoutingModule } from './dashboard-users-routing.module';
import { DashboardUsersComponent } from './dashboard-users.component';

@NgModule({
  providers: [],
  declarations: [DashboardUsersComponent],
  imports: [CommonModule, DashboardUsersRoutingModule, SharedModule],
})
export class DashboardUsersModule {}
