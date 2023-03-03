import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverPasswordComponent } from './recover-password.component';
import { RecoverPasswordRoutingModule } from './recover-password-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NumberToSecondsModule } from '../../../shared/pipes/number-to-seconds.module';
import { RecoverPasswordService } from './recover-password.service';

@NgModule({
  providers: [RecoverPasswordService],
  declarations: [RecoverPasswordComponent],
  imports: [
    CommonModule,
    RecoverPasswordRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    NumberToSecondsModule,
  ],
})
export class RecoverPasswordModule {}
