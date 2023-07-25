import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { StatusesResponse } from 'src/app/core/models/statuses-response';
import { StatusesService } from '../../core/services/statues.service';
import { statusesApiActions } from '../actions/statuses.action';

@Injectable()
export class StatusesEffects {
  constructor(private actions$: Actions, private statusesService: StatusesService) {}

  statuses$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(statusesApiActions.getStatusesRequest.type),
      mergeMap(() =>
        this.statusesService.getStatues().pipe(
          map(statuses => statusesApiActions.getStatusesSuccess(statuses)),
          catchError(() =>
            of(statusesApiActions.getStatusesFailure({ error: 'Error on statusesService' }))
          )
        )
      )
    );
  });
}
