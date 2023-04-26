import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectIconComponent } from './select-icon.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SelectIconComponent],
  imports: [CommonModule, SharedModule],
  exports: [SelectIconComponent],
  providers: [],
})
export class SelectIconModule {}
