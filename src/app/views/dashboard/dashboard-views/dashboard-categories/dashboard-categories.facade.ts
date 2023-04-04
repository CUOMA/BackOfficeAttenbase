import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { categoriesApiActions } from '../../../../store/actions/categories.actions';
import { selectCategory } from '../../../../store/selectors/categories.selectors';
import {
  selectAreCategoriesLoading,
  selectCategories,
} from '../../../../store/selectors/categories.selectors';

@Injectable()
export class CategoriesFacade {
  constructor(private store: Store) {}

  public get areCategoriesLoading(): Observable<boolean> {
    return this.store.select(selectAreCategoriesLoading);
  }

  public dispatchGetCategories(): any {
    this.store.dispatch(categoriesApiActions.getCategoriesRequest());
  }

  public selectCategories(): Observable<any> {
    return this.store.select(selectCategories);
  }
  public detailCategory(id: number): Observable<any> {
    return this.store.select(selectCategory(id));
  }
}
