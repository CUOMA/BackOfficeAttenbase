import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionSummaryRoutingModule } from './question-summary-routing.module';
import { QuestionSummaryComponent } from './question-summary.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [QuestionSummaryComponent],
  imports: [CommonModule, SharedModule, QuestionSummaryRoutingModule],
})
export class QuestionSummaryModule {}
