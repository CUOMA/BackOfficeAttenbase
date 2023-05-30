import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { MaterialModule } from '../core/modules/material.module';
import { BackArrowButtonModule } from './back-arrow-button/back-arrow-button.module';
import { ButtonComponent } from './button/button.component';
import { ChipsComponent } from './chips/chips.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';

@NgModule({
  declarations: [ButtonComponent, ChipsComponent, EmptyStateComponent],
  imports: [CommonModule, MaterialModule, QuicklinkModule],
  exports: [QuicklinkModule, MaterialModule, ButtonComponent, EmptyStateComponent],
})
export class SharedModule {}
