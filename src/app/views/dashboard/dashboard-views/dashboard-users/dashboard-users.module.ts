import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardUsersRoutingModule } from './dashboard-users-routing.module';
import { DashboardUsersComponent } from './dashboard-users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AllowedClientsComponent } from './allowed-clients/allowed-clients.component';

@NgModule({
  providers: [],
  declarations: [DashboardUsersComponent, AllowedClientsComponent],
  imports: [CommonModule, DashboardUsersRoutingModule, SharedModule],
})
export class DashboardUsersModule {}
