import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { HourPickerComponent } from './hour-picker.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HourPickerComponent],
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  exports: [HourPickerComponent],
})
export class HourPickerModule {}
