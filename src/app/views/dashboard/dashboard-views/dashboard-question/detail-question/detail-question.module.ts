import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardQuestionRoutingModule } from '../dashboard-question-routing.module';
import { DetailQuestionComponent } from './detail-question.component';

@NgModule({
  providers: [],
  declarations: [
    DetailQuestionComponent
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, DashboardQuestionRoutingModule],
})
export class DetailQuestionModule { }
