import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'olvide-mi-contraseña',
    loadChildren: () =>
      import('./password-recovery/recover-password.module').then(m => m.RecoverPasswordModule),
  },
  // {
  //   path: 'generar-nueva-contraseña',
  //   loadChildren: () =>
  //     import('./password-reset/password-reset.module').then(m => m.PasswordResetModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
