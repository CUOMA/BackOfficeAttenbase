import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuicklinkModule } from 'ngx-quicklink';
import { MaterialModule } from '../core/modules/material.module';
import { BackArrowButtonModule } from './back-arrow-button/back-arrow-button.module';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { HourPickerModule } from './hour-picker/hour-picker.module';
import { SearcherModule } from './searcher/searcher.module';
import { StatusButtonComponent } from './status-button/status-button.component';
import { MultiselectModule } from './multiselect/multiselect.module';

@NgModule({
  declarations: [EmptyStateComponent, StatusButtonComponent],
  imports: [CommonModule, MaterialModule, QuicklinkModule],
  exports: [
    QuicklinkModule,
    MaterialModule,
    EmptyStateComponent,
    BackArrowButtonModule,
    HourPickerModule,
    SearcherModule,
    StatusButtonComponent,
    MultiselectModule,
  ],
})
export class SharedModule {}
