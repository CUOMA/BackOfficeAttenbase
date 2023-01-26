import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DashboardCreateQuestionComponent } from './dashboard-create-question.component';
import { DashboardCreateQuestionRoutingModule } from './dashboard-create-question-routing.module';

@NgModule({
  providers: [DashboardCreateQuestionComponent],
  declarations: [DashboardCreateQuestionComponent],
  imports: [CommonModule, SharedModule, DashboardCreateQuestionRoutingModule],
})
export class DashboardCreateQuestionModule {}
