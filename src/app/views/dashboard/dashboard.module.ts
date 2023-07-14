import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthFeatureModule } from 'src/app/core/modules/auth.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AsideModule } from './aside/aside.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardFacade } from './dashboard.facade';

@NgModule({
  providers: [DashboardFacade],
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, AuthFeatureModule, SharedModule, AsideModule],
})
export class DashboardModule {}
