import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { BackArrowButtonComponent } from './back-arrow-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BackArrowButtonComponent],
  imports: [MaterialModule, CommonModule, RouterModule],
  exports: [BackArrowButtonComponent],
})
export class BackArrowButtonModule {}
