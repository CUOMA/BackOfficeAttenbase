import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardCategoriesRoutingModule } from './dashboard-categories-routing.module';
import { CategoriesFacade } from './dashboard-categories.facade';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from '../../../../store/effects/categories.effects';
import { DashboardCategoriesComponent } from './dashboard-categories.component';
import { ScrollCategoriesComponent } from './table/scroll-categories/scroll-categories.component';

import {
  categoriesFeatureKey,
  categoriesReducer,
} from '../../../../store/reducers/categories.reducers';
import { TableCategoriesComponent } from './table/table-categories.component';

@NgModule({
  providers: [CategoriesFacade],
  declarations: [DashboardCategoriesComponent, ScrollCategoriesComponent, TableCategoriesComponent],
  imports: [
    CommonModule,
    DashboardCategoriesRoutingModule,
    SharedModule,
    StoreModule.forFeature(categoriesFeatureKey, categoriesReducer),
    EffectsModule.forFeature([CategoriesEffects]),
  ],
})
export class DashboardCategoriesModule {}
