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
import { StatusesEffects } from '../../../../store/effects/statuses.effects';
import { statusesFeatureKey, statusesReducer } from 'src/app/store/reducers/statuses.reducers';
import { StatusQuestionComponent } from './table/status-question/status-question.component';
import { MenuQuestionComponent } from './table/menu-question/menu-question.component';
import { SearcherModule } from '../../searcher/searcher.module';

@NgModule({
  providers: [QuestionsFacade],
  declarations: [
    DashboardQuestionComponent,
    TableQuestionComponent,
    MenuFilterComponent,
    MenuQuestionComponent,
    StatusQuestionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardQuestionRoutingModule,
    SearcherModule,
    StoreModule.forFeature(questionsFeatureKey, questionsReducer),
    StoreModule.forFeature(statusesFeatureKey, statusesReducer),
    EffectsModule.forFeature([QuestionsEffects, StatusesEffects]),
  ],
})
export class DashboardQuestionModule {}
