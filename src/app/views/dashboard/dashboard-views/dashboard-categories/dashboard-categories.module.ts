import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesEffects } from '../../../../store/effects/categories.effects';
import { DashboardCategoriesRoutingModule } from './dashboard-categories-routing.module';
import { DashboardCategoriesComponent } from './dashboard-categories.component';
import { CategoriesFacade } from './dashboard-categories.facade';
import { ScrollCategoriesComponent } from './table/scroll-categories/scroll-categories.component';

import { ReactiveFormsModule } from '@angular/forms';
import {
  categoriesFeatureKey,
  categoriesReducer,
} from '../../../../store/reducers/categories.reducers';
import { DashboardDetailCategoriesComponent } from './detail-category/dashboard-detail-categories.component';
import { DialogSelectIconComponent } from './dialog-select-icon/dialog-select-icon.component.component';
import { DashboardNewCategoryComponent } from './new-category/dashboard-new-category.component';
import { TableCategoriesComponent } from './table/table-categories.component';
import { SelectIconCategoryModule } from '../dashboard-question/create-question/metadata-question/dialog-create-category/select-icon-category/select-icon-category.module';

@NgModule({
  providers: [CategoriesFacade],
  declarations: [
    DialogSelectIconComponent,
    DashboardCategoriesComponent,
    ScrollCategoriesComponent,
    TableCategoriesComponent,
    DashboardDetailCategoriesComponent,
    DashboardNewCategoryComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardCategoriesRoutingModule,
    SharedModule,
    StoreModule.forFeature(categoriesFeatureKey, categoriesReducer),
    EffectsModule.forFeature([CategoriesEffects]),
    SelectIconCategoryModule,
  ],
})
export class DashboardCategoriesModule {}
