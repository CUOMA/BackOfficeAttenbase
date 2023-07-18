import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { categoriesApiActions } from 'src/app/store/actions/categories.actions';
import { selectCreateQuestionTitle } from 'src/app/store/selectors/create-question.selectors';
import {
  selectAreListSubcategoriesLoading,
  selectListCategories,
  selectListSubCategories,
} from 'src/app/store/selectors/list-categories.selectors';

@Injectable({
  providedIn: 'root',
})
export class DashboardCreateQuestionFacade {
  constructor(private store: Store) {}

  public dispatchGetListCategories(): void {
    this.store.dispatch(categoriesApiActions.getListCategoriesRequest());
  }

  public dispatchGetListSubcategories(id: number): void {
    this.store.dispatch(categoriesApiActions.getListSubcategoriesRequest({ id }));
  }

  public selectListCategories(): Observable<any> {
    return this.store.select(selectListCategories);
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
