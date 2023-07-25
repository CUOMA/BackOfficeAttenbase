import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { categoriesApiActions } from 'src/app/store/actions/categories.actions';
import { selectCreateQuestionTitle } from 'src/app/store/selectors/create-question.selectors';
import {
  selectAreListSubcategoriesLoading,
  selectListCategories,
  selectListSubCategories,
} from 'src/app/store/selectors/list-categories.selectors';
import { selectStatuses } from 'src/app/store/selectors/statuses.selectors';

@Injectable({
  providedIn: 'root',
})
export class DashboardCreateQuestionFacade {
  constructor(private store: Store) {}

  public dispatchGetListCategories(): any {
    this.store.dispatch(categoriesApiActions.getListCategoriesRequest());
  }

  public dispatchGetListSubcategories(id: number): void {
    this.store.dispatch(categoriesApiActions.getListSubcategoriesRequest({ id }));
  }

  public selectListCategories(): Observable<any> {
    return this.store.select(selectListCategories);
  }

  public selectListStatues(): Observable<any> {
    return this.store.select(selectStatuses);
  }

  public selectListSubcategories(): Observable<any> {
    return this.store.select(selectListSubCategories);
  }

  public get areSubcategoriesLoading(): Observable<boolean> {
    return this.store.select(selectAreListSubcategoriesLoading);
  }

  public get title(): Observable<string> {
    return this.store.select(selectCreateQuestionTitle);
  }
}
