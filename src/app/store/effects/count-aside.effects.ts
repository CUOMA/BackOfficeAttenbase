import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CountAsideService } from 'src/app/core/services/count-aside.service';
import { countAsideApiActions } from '../actions/count-aside.action';

@Injectable({ providedIn: 'root' })
export class CountAsideEffects {
  constructor(private actions$: Actions, private countAsideService: CountAsideService) {}
  countAside$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(countAsideApiActions.getCountAsideRequest.type),
      mergeMap(() =>
        this.countAsideService.getCountAside().pipe(
          map(count => countAsideApiActions.getCountAsideSuccess(count)),
          catchError(() =>
            of(countAsideApiActions.getCountAsideFailure({ error: 'Error on count aside' }))
          )
        )
      )
    );
  });
}
