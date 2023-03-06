import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectAreCategoriesLoading } from '../../../../store/selectors/categories.selectors';
import { categoriesApiActions } from '../../../../store/actions/categories.actions';

@Injectable()
export class CategoriesFacade {
  constructor(private store: Store) {}
  public get areCategoriesLoading(): Observable<boolean> {
    return this.store.select(selectAreCategoriesLoading);
  }

  public getCategories(): void {
    this.store.dispatch(categoriesApiActions.getCategoriesRequest());
  }

  public deleteCategories(): Observable<any> {
    return of([
      {
        position: 'Problemas de Señal',
        name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
      },
    ]);
  }
}
