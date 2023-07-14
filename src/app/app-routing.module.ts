import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { DashboardGuard } from './core/guards/dashboard.guard';
import { LoginGuard } from './core/guards/login.guard';
import { environment } from '../environments/environment.prod';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'olvide-mi-contraseña',
    loadChildren: () =>
      import('./views/login/password-reset/password-reset.module').then(m => m.PasswordResetModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [DashboardGuard],
  },
  {
    path: 'debug',
    loadChildren: () => import('./views/debug/debug.module').then(m => m.DebugModule),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
