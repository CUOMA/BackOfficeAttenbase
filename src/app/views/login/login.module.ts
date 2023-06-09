import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgLetModule } from 'ng-let';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFeatureModule } from 'src/app/core/modules/auth.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFacade } from './login.facade';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NgLetModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    AuthFeatureModule,
    SharedModule,
  ],
  providers: [LoginFacade],
})
export class LoginModule {}
