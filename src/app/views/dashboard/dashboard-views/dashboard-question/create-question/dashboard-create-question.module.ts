import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BackArrowButtonModule } from 'src/app/shared/back-arrow-button/back-arrow-button.module';
import { CategoriesEffects } from 'src/app/store/effects/categories.effects';
import {
  listCategoriesFeatureKey,
  listCategoriesReducer,
} from 'src/app/store/reducers/list-categories.reducers';
import { DialogUnsavedChangeComponent } from '../../../../../shared/back-arrow-button/dialog-unsaved-change/dialog-unsaved-change.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { CategoriesFacade } from '../../dashboard-categories/dashboard-categories.facade';
import { ContentComponent } from './content/content.component';
import { DashboardCreateQuestionRoutingModule } from './dashboard-create-question-routing.module';
import { DashboardCreateQuestionComponent } from './dashboard-create-question.component';
import { DateComponent } from './date/date.component';
import { DialogCreateCategoryComponent } from './metadata-question/dialog-create-category/dialog-create-category.component';
import { SelectIconCategoryModule } from './metadata-question/dialog-create-category/select-icon-category/select-icon-category.module';
import { MetadataQuestionComponent } from './metadata-question/metadata-question.component';

@NgModule({
  providers: [],
  declarations: [
    DashboardCreateQuestionComponent,
    MetadataQuestionComponent,
    DateComponent,
    ContentComponent,
    DialogCreateCategoryComponent,
    DialogUnsavedChangeComponent,
  ],
  imports: [
    BackArrowButtonModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature(listCategoriesFeatureKey, listCategoriesReducer),
    EffectsModule.forFeature([CategoriesEffects]),
    DashboardCreateQuestionRoutingModule,
    ReactiveFormsModule,
    SelectIconCategoryModule,
    FormsModule,
    CKEditorModule,
  ],
})
export class DashboardCreateQuestionModule {}
