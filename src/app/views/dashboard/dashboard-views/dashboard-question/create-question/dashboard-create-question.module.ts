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
import { DialogCreateCategoryComponent } from './metadata-question/dialog-create-category copy/dialog-create-category.component';
import { MetadataQuestionComponent } from './metadata-question/metadata-question.component';
import { DialogSelectIconCategoryComponent } from './metadata-question/dialog-create-category copy/dialog-select-icon-category/dialog-select-icon-category.component';
import { SelectIconModule } from '../../dashboard-categories/select-icon/select-icon.module';

@NgModule({
  providers: [DashboardCreateQuestionFacade],
  declarations: [
    DashboardCreateQuestionComponent,
    MetadataQuestionComponent,
    DateComponent,
    ContentComponent,
    DialogCreateCategoryComponent,
    DialogSelectIconCategoryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(listCategoriesFeatureKey, listCategoriesReducer),
    EffectsModule.forFeature([CategoriesEffects]),
    DashboardCreateQuestionRoutingModule,
    ReactiveFormsModule,
    SelectIconModule,
  ],
})
export class DashboardCreateQuestionModule {}
