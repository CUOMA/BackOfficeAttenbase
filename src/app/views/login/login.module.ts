import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgLetModule } from 'ng-let';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthFeatureModule } from 'src/app/core/modules/auth.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginFacade } from './login.facade';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NgLetModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    AuthFeatureModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  providers: [LoginFacade],
})
export class LoginModule {}
