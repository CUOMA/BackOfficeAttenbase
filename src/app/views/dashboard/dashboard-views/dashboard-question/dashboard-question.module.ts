import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { DashboardQuestionRoutingModule } from './dashboard-question-routing.module';
import { DashboardQuestionComponent } from './dashboard-question.component';
import { QuestionsFacade } from './dashboard-question.facade';
import { MenuFilterComponent } from './menu-filter/menu-filter.component';
import { MenuQuestionComponent } from './table/menu-question/menu-question.component';
import { TableQuestionComponent } from './table/table-question.component';

@NgModule({
  providers: [QuestionsFacade],
  declarations: [
    DashboardQuestionComponent,
    TableQuestionComponent,
    MenuFilterComponent,
    MenuQuestionComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, DashboardQuestionRoutingModule],
})
export class DashboardQuestionModule {}
