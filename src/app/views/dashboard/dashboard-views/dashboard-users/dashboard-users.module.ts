import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllowedClientsComponent } from './allowed-clients/allowed-clients.component';
import { DashboardUsersRoutingModule } from './dashboard-users-routing.module';
import { DashboardUsersComponent } from './dashboard-users.component';
import { MenuFiltterComponent } from './menu-filtter/menu-filtter.component';

@NgModule({
  providers: [],
  declarations: [DashboardUsersComponent, AllowedClientsComponent, MenuFiltterComponent],
  imports: [CommonModule, DashboardUsersRoutingModule, SharedModule, ReactiveFormsModule],
})
export class DashboardUsersModule {}
