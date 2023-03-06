import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { authApiActions } from '../actions/authentication.actions';
import { Action } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class AuthenticationEffects {
  constructor(private actions$: Actions, private authenticationService: AuthenticationService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authApiActions.loginRequest.type),
      switchMap((action: Action & { email: string; password: string }) =>
        this.authenticationService.login({ email: action.email, password: action.password }).pipe(
          map(payload => authApiActions.loginSuccess(payload)),
          catchError(() => of(authApiActions.loginFailure({ error: 'Error on login' })))
        )
      )
    );
  });
}
