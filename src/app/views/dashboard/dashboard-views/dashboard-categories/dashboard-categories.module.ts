import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardCategoriesRoutingModule } from './dashboard-categories-routing.module';
import { DashboardCategoriesComponent } from './dashboard-categories.component';
import { CategoriesFacade } from './dashboard-categories.facade';
import { ScrollCategoriesComponent } from './scroll-categories/scroll-categories.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from '../../../../store/effects/categories.effects';
import {
  categoriesFeatureKey,
  categoriesReducer,
} from '../../../../store/reducers/categories.reducers';

@NgModule({
  providers: [CategoriesFacade],
  declarations: [DashboardCategoriesComponent, ScrollCategoriesComponent],
  imports: [
    CommonModule,
    DashboardCategoriesRoutingModule,
    SharedModule,
    StoreModule.forFeature(categoriesFeatureKey, categoriesReducer),
    EffectsModule.forFeature([CategoriesEffects]),
  ],
})
export class DashboardCategoriesModule {}
