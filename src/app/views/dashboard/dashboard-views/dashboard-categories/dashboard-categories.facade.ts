import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { categoriesApiActions } from '../../../../store/actions/categories.actions';
import { selectCategory } from '../../../../store/selectors/categories.selectors';
import { CategoriesService } from '../../../../core/services/categories.service';
import {
  selectAreCategoriesLoading,
  selectCategories,
} from '../../../../store/selectors/categories.selectors';

@Injectable()
export class CategoriesFacade {
  protected selectedIcon = '';
  constructor(private store: Store, private categoriesService: CategoriesService) {}

  public get areCategoriesLoading(): Observable<boolean> {
    return this.store.select(selectAreCategoriesLoading);
  }

  public dispatchGetCategories(page: number): any {
    this.store.dispatch(categoriesApiActions.getCategoriesRequest({ page: page }));
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
}
