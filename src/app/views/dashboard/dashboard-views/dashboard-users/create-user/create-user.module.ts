import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user.component';
import { CreateUserRoutingModule } from './create-user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [CommonModule, CreateUserRoutingModule, SharedModule, ReactiveFormsModule],
})
export class CreateUserModule {}
