import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { MaterialModule } from '../core/modules/material.module';
import { BackArrowButtonModule } from './back-arrow-button/back-arrow-button.module';
import { ButtonComponent } from './button/button.component';
import { ChipsComponent } from './chips/chips.component';

@NgModule({
  declarations: [ButtonComponent, ChipsComponent],
  imports: [CommonModule, QuicklinkModule, MaterialModule],
  exports: [QuicklinkModule, MaterialModule, ButtonComponent, BackArrowButtonModule],
})
export class SharedModule {}
