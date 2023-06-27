import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { MultiselectComponent } from './multiselect.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsFacade } from 'src/app/views/dashboard/dashboard-views/dashboard-question/dashboard-question.facade';

@NgModule({
  providers: [QuestionsFacade],
  declarations: [MultiselectComponent],
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  exports: [MultiselectComponent],
})
export class MultiselectModule {}
