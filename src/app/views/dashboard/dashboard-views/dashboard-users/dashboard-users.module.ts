import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersEffects } from 'src/app/store/effects/users.effects';
import { UsersReducer, usersFeatureKey } from 'src/app/store/reducers/users.reducers';
import { AllowedClientsComponent } from './allowed-clients/allowed-clients.component';
import { DashboardUsersRoutingModule } from './dashboard-users-routing.module';
import { DashboardUsersComponent } from './dashboard-users.component';
import { UsersFacade } from './dashboard-users.facade';
import { MenuFiltterComponent } from './menu-filtter/menu-filtter.component';
import { TableUsersComponent } from './table-users/table-users.component';

@NgModule({
  providers: [UsersFacade],
  declarations: [
    DashboardUsersComponent,
    AllowedClientsComponent,
    MenuFiltterComponent,
    TableUsersComponent,
  ],
  imports: [
    CommonModule,
    DashboardUsersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(usersFeatureKey, UsersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class DashboardUsersModule {}
