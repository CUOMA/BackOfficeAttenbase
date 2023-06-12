import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionSummaryRoutingModule } from './question-summary-routing.module';
import { QuestionSummaryComponent } from './question-summary.component';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';

@NgModule({
  providers: [DashboardCreateQuestionFacade],
  declarations: [QuestionSummaryComponent],
  imports: [CommonModule, SharedModule, QuestionSummaryRoutingModule],
})
export class QuestionSummaryModule {}
