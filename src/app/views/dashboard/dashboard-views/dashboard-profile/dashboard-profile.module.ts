import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DashboardProfileRoutingModule } from './dashboard-profile-routing.module';
import { DashboardProfileComponent } from './dashboard-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { profileFacade } from './dashboard-profile.facade';

@NgModule({
  providers: [profileFacade],
  declarations: [DashboardProfileComponent],
  imports: [CommonModule, DashboardProfileRoutingModule, SharedModule, ReactiveFormsModule],
})
export class DashboardProfileModule {}
