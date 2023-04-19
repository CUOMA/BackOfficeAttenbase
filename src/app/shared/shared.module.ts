import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { MaterialModule } from '../core/modules/material.module';
import { ButtonComponent } from './button/button.component';
import { ChipsComponent } from './chips/chips.component';
import { BackArrowButtonComponent } from './back-arrow-button/back-arrow-button.component';

@NgModule({
  declarations: [ButtonComponent, ChipsComponent, BackArrowButtonComponent],
  imports: [CommonModule, QuicklinkModule, MaterialModule],
  exports: [QuicklinkModule, MaterialModule, ButtonComponent, BackArrowButtonComponent],
})
export class SharedModule {}
