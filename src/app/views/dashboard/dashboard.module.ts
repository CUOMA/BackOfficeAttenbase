import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthFeatureModule } from 'src/app/core/modules/auth.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AsideModule } from './aside/aside.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardFacade } from './dashboard.facade';
import { SearcherModule } from './searcher/searcher.module';

@NgModule({
  providers: [DashboardFacade],
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AuthFeatureModule,
    MatSidenavModule,
    MatButtonModule,
    SharedModule,
    AsideModule,
    SearcherModule,
  ],
})
export class DashboardModule {}
