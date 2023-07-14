import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoriesService } from '../../../../core/services/categories.service';
import { categoriesApiActions } from '../../../../store/actions/categories.actions';
import {
  selectAreCategoriesLoading,
  selectCategories,
  selectCategory,
} from '../../../../store/selectors/categories.selectors';

import { Actions, ofType } from '@ngrx/effects';
import { first } from 'rxjs/operators';

@Injectable()
export class CategoriesFacade {
  public selectedIcon = new BehaviorSubject<string>('add');
  constructor(
    private store: Store,
    private categoriesService: CategoriesService,
    private actions$: Actions
  ) {}

  public get areCategoriesLoading(): Observable<boolean> {
    return this.store.select(selectAreCategoriesLoading);
  }

  public dispatchGetCategories(page: number, order: string): any {
    this.store.dispatch(categoriesApiActions.getCategoriesRequest({ page: page, order: order }));
  }

  public dispatchDeleteCategory(id: number): any {
    return this.categoriesService.deleteCategory(id);
  }
  public forceDeleteCategory(id: number): any {
    return this.categoriesService.forceDelete(id).subscribe();
  }
  public selectCategories(): Observable<any> {
    return this.store.select(selectCategories);
  }
  public detailCategory(id: number): Observable<any> {
    return this.store.select(selectCategory(id));
  }
  public postNewCategory(form: any) {
    return this.categoriesService.postCategoryCreate(form);
  }
  public dispatchGetCategoriesSearch(query: string) {
    this.store.dispatch(categoriesApiActions.searchRequest({ query }));
  }
  public isCategoriesUpdated(): Observable<any> {
    return this.actions$.pipe(first(), ofType(categoriesApiActions.deleteCategoriesSuccess));
  }
}
