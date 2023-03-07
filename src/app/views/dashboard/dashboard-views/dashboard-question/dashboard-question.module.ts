import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DashboardQuestionRoutingModule } from './dashboard-question-routing.module';
import { DashboardQuestionComponent } from './dashboard-question.component';
import { QuestionFacade } from './dashboard-question.facade';
import { TableQuestionComponent } from './table/table-question.component';
import { MenuFilterComponent } from './menu-filter/menu-filter.component';

@NgModule({
  providers: [QuestionFacade],
  declarations: [DashboardQuestionComponent, TableQuestionComponent, MenuFilterComponent],
  imports: [CommonModule, SharedModule, DashboardQuestionRoutingModule],
})
export class DashboardQuestionModule {}
