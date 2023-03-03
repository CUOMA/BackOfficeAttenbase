import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberToSecondsModule } from '../../../shared/pipes/number-to-seconds.module';
import { SharedModule } from '../../../shared/shared.module';
import { PasswordResetRoutingModule } from './password-reset-routing.module';
import { PasswordResetComponent } from './password-reset.component';
import { PasswordResetService } from './password-reset.service';

@NgModule({
  providers: [PasswordResetService],
  declarations: [PasswordResetComponent],
  imports: [
    CommonModule,
    PasswordResetRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NumberToSecondsModule,
  ],
})
export class PasswordResetModule {}
