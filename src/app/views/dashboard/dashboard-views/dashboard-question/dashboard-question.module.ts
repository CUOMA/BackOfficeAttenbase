import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DashboardQuestionRoutingModule } from './dashboard-question-routing.module';
import { DashboardQuestionComponent } from './dashboard-question.component';
import { QuestionsFacade } from './dashboard-question.facade';
import { TableQuestionComponent } from './table/table-question.component';
import { MenuFilterComponent } from './menu-filter/menu-filter.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { questionsFeatureKey, questionsReducer } from 'src/app/store/reducers/questions.reducers';
import { QuestionsEffects } from '../../../../store/effects/questions.effects';

@NgModule({
  providers: [QuestionsFacade],
  declarations: [DashboardQuestionComponent, TableQuestionComponent, MenuFilterComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardQuestionRoutingModule,
    StoreModule.forFeature(questionsFeatureKey, questionsReducer),
    EffectsModule.forFeature([QuestionsEffects]),
  ],
})
export class DashboardQuestionModule {}
