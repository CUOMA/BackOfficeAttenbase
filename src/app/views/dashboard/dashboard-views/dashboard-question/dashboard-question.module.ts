import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DashboardQuestionComponent } from './dashboard-question.component';
import { DashboardQuestionRoutingModule } from './dashboard-question-routing.module';

@NgModule({
  providers: [DashboardQuestionComponent],
  declarations: [DashboardQuestionComponent],
  imports: [CommonModule, SharedModule, DashboardQuestionRoutingModule],
})
export class DashboardQuestionModule {}
