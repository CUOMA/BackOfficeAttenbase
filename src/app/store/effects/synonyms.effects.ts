import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SynonymsService } from '../../core/services/synonyms.service';
import { synonymsApiActions } from '../actions/synonyms.action';

@Injectable({ providedIn: 'root' })
export class SynonymsEffects {
  constructor(private actions$: Actions, private synonymsService: SynonymsService) {}
  synonyms$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(synonymsApiActions.getSynonymsRequest.type),
      mergeMap((action: Action & { page: number }) =>
        this.synonymsService.getSynonyms(action.page).pipe(
          map(synonyms => synonymsApiActions.getSynonymsSuccess(synonyms)),
          catchError(() =>
            of(synonymsApiActions.getSynonymsFailure({ error: 'Error on Sinonimos' }))
          )
        )
      )
    );
  });
}
