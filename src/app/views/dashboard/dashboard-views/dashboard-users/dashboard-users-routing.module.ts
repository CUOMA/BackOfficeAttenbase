import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUsersComponent } from './dashboard-users.component';

const routes: Routes = [
  { path: '', component: DashboardUsersComponent },
  {
    path: 'crear-usuario',
    loadChildren: () => import('./create-user/create-user.module').then(m => m.CreateUserModule),
    data: {
      preload: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardUsersRoutingModule {}
