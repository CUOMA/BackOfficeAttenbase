import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DashboardQuestionRoutingModule } from './dashboard-question-routing.module';
import { DashboardQuestionComponent } from './dashboard-question.component';
import { TablaComponent } from './table/tabla';

@NgModule({
  providers: [DashboardQuestionComponent],
  declarations: [DashboardQuestionComponent, TablaComponent],
  imports: [CommonModule, SharedModule, DashboardQuestionRoutingModule],
})
export class DashboardQuestionModule {}
