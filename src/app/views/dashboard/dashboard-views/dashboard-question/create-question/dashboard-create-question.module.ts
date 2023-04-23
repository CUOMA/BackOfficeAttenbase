import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardCreateQuestionComponent } from './dashboard-create-question.component';
import { DashboardCreateQuestionRoutingModule } from './dashboard-create-question-routing.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { generalComponent } from './general/general.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from 'src/app/store/effects/categories.effects';
import {
  listCategoriesFeatureKey,
  listCategoriesReducer,
} from 'src/app/store/reducers/list-categories.reducers';
import { DashboardCreateQuestionFacade } from './dashboard-create-question.facade';
import { dateComponent } from './date/date.component';
import { contentComponent } from './content/content.component';

@NgModule({
  providers: [DashboardCreateQuestionFacade],
  declarations: [
    DashboardCreateQuestionComponent,
    generalComponent,
    dateComponent,
    contentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(listCategoriesFeatureKey, listCategoriesReducer),
    EffectsModule.forFeature([CategoriesEffects]),
    DashboardCreateQuestionRoutingModule,
    ReactiveFormsModule,
  ],
})
export class DashboardCreateQuestionModule {}
