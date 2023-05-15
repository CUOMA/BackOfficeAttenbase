import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { BackArrowButtonRoutingModule } from './back-arrow-button-routing.module';
import { BackArrowButtonComponent } from './back-arrow-button.component';

@NgModule({
  declarations: [BackArrowButtonComponent],
  imports: [MaterialModule, CommonModule, BackArrowButtonRoutingModule],
  exports: [BackArrowButtonComponent],
})
export class BackArrowButtonModule {}
