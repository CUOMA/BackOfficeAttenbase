import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CategoriesEffects } from 'src/app/store/effects/categories.effects';
import {
  listCategoriesFeatureKey,
  listCategoriesReducer,
} from 'src/app/store/reducers/list-categories.reducers';
import { SharedModule } from '../../../../../shared/shared.module';
import { CategoriesFacade } from '../../dashboard-categories/dashboard-categories.facade';
import { ContentComponent } from './content/content.component';
import { DashboardCreateQuestionRoutingModule } from './dashboard-create-question-routing.module';
import { DashboardCreateQuestionComponent } from './dashboard-create-question.component';
import { DateComponent } from './date/date.component';
import { DialogCreateCategoryComponent } from './metadata-question/dialog-create-category/dialog-create-category.component';
import { SelectIconCategoryModule } from './metadata-question/dialog-create-category/select-icon-category/select-icon-category.module';
import { MetadataQuestionComponent } from './metadata-question/metadata-question.component';
import { FormsModule } from '@angular/forms';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
@NgModule({
  providers: [CategoriesFacade],
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
    CKEditorModule,
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
