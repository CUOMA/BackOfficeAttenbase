import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, mergeMap, tap, map } from 'rxjs/operators';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { categoriesApiActions } from '../actions/categories.actions';

@Injectable({ providedIn: 'root' })
export class CategoriesEffects {
  constructor(private actions$: Actions, private categoriesService: CategoriesService) {}
  categories$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(categoriesApiActions.getCategoriesRequest.type),
      mergeMap(() =>
        this.categoriesService.getCategories().pipe(
          map(categories => categoriesApiActions.getCategoriesSuccess(categories)),
          catchError(() =>
            of(categoriesApiActions.getCategoriesFailure({ error: 'Error on categories' }))
          )
        )
      )
    );
  });
}
