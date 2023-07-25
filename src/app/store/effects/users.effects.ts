import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsersService } from '../../core/services/users.service';
import { usersApiActions } from '../actions/users.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}
  users$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(usersApiActions.getUsersRequest.type),
      mergeMap(() =>
        this.usersService.getusers().pipe(
          map(users => usersApiActions.getUsersSuccess(users)),
          catchError(() => of(usersApiActions.getUsersFailure({ error: 'Error on users' })))
        )
      )
    );
  });
}
