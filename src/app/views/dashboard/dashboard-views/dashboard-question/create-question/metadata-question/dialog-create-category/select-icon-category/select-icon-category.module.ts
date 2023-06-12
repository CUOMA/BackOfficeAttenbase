import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectIconComponent } from './select-icon-category.component';

@NgModule({
  declarations: [SelectIconComponent],
  exports: [SelectIconComponent],
  imports: [CommonModule, SharedModule],
})
export class SelectIconCategoryModule {}
