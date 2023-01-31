import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NumberToSecondsModule } from '../../../shared/pipes/number-to-seconds.module';
import { PasswordResetRoutingModule } from './password-reset-routing.module';
import { RecoverPasswordComponent } from './password-reset.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [RecoverPasswordComponent],
  imports: [
    CommonModule,
    PasswordResetRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    NumberToSecondsModule,
  ],
})
export class PasswordResetModule {}
