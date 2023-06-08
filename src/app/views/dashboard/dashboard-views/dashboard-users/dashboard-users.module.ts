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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersReducer, usersFeatureKey } from 'src/app/store/reducers/users.reducers';
import { UsersEffects } from 'src/app/store/effects/users.effects';
import { UsersFacade } from './dashboard-users.facade';
import { TableUsersComponent } from './table-users/table-users.component';
import { SearcherModule } from '../../searcher/searcher.module';

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
    SearcherModule,
    ReactiveFormsModule,
    StoreModule.forFeature(usersFeatureKey, UsersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class DashboardUsersModule {}
