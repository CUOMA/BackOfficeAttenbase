import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProfileService } from 'src/app/core/services/profile.service';
import { profileApiActions } from '../actions/profile.action';

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions, private profileService: ProfileService) {}
  countAside$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(profileApiActions.getProfileRequest.type),
      mergeMap(() =>
        this.profileService.getProfile().pipe(
          map(profile => profileApiActions.getProfileSuccess(profile)),
          catchError(() => of(profileApiActions.getProfileFailure({ error: 'profile' })))
        )
      )
    );
  });
}
