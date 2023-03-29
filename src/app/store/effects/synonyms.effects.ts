import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, mergeMap, tap, map } from 'rxjs/operators';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { categoriesApiActions } from '../actions/categories.actions';
import { SynonymsService } from '../../core/services/synonyms.service';
import { synonymsApiActions } from '../actions/synonyms.action';

@Injectable({ providedIn: 'root' })
export class SynonymsEffects {
  constructor(private actions$: Actions, private synonymsService: SynonymsService) {}
  synonyms$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(synonymsApiActions.getSynonymsRequest.type),
      mergeMap(() =>
        this.synonymsService.getSynonyms().pipe(
          map(synonyms => synonymsApiActions.getSynonymsSuccess(synonyms)),
          catchError(() =>
            of(synonymsApiActions.getSynonymsFailure({ error: 'Error on Sinonimos' }))
          )
        )
      )
    );
  });
}
