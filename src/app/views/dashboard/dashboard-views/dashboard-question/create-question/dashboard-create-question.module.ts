import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CategoriesEffects } from 'src/app/store/effects/categories.effects';
import {
  listCategoriesFeatureKey,
  listCategoriesReducer,
} from 'src/app/store/reducers/list-categories.reducers';
import { SharedModule } from '../../../../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { DashboardCreateQuestionRoutingModule } from './dashboard-create-question-routing.module';
import { DashboardCreateQuestionComponent } from './dashboard-create-question.component';
import { DashboardCreateQuestionFacade } from './dashboard-create-question.facade';
import { DateComponent } from './date/date.component';
import { DialogCreateCategoryComponent } from './metadata-question/dialog-create-category/dialog-create-category.component';
import { MetadataQuestionComponent } from './metadata-question/metadata-question.component';
import { SelectIconCategoryModule } from './metadata-question/dialog-create-category/select-icon-category/select-icon-category.module';

@NgModule({
  declarations: [
    DashboardCreateQuestionComponent,
    MetadataQuestionComponent,
    DateComponent,
    ContentComponent,
    DialogCreateCategoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(listCategoriesFeatureKey, listCategoriesReducer),
    EffectsModule.forFeature([CategoriesEffects]),
    DashboardCreateQuestionRoutingModule,
    ReactiveFormsModule,
    SelectIconCategoryModule,
  ],
})
export class DashboardCreateQuestionModule {}
