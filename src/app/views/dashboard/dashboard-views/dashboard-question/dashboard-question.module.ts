import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { questionsFeatureKey, questionsReducer } from 'src/app/store/reducers/questions.reducers';
import { statusesFeatureKey, statusesReducer } from 'src/app/store/reducers/statuses.reducers';
import { SharedModule } from '../../../../shared/shared.module';
import { QuestionsEffects } from '../../../../store/effects/questions.effects';
import { StatusesEffects } from '../../../../store/effects/statuses.effects';
import { DashboardQuestionRoutingModule } from './dashboard-question-routing.module';
import { DashboardQuestionComponent } from './dashboard-question.component';
import { QuestionsFacade } from './dashboard-question.facade';
import { MenuFilterComponent } from './menu-filter/menu-filter.component';
import { MenuQuestionComponent } from './table/menu-question/menu-question.component';
import { SearcherModule } from '../../searcher/searcher.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TableQuestionComponent } from './table/table-question.component';


@NgModule({
  providers: [QuestionsFacade],
  declarations: [
    DashboardQuestionComponent,
    TableQuestionComponent,
    MenuFilterComponent,
    MenuQuestionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DashboardQuestionRoutingModule,
    StoreModule.forFeature(questionsFeatureKey, questionsReducer),
    StoreModule.forFeature(statusesFeatureKey, statusesReducer),
    EffectsModule.forFeature([QuestionsEffects, StatusesEffects]),
  ],
})
export class DashboardQuestionModule {}
