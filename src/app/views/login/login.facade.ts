import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { authApiActions } from 'src/app/store/actions/authentication.actions';
import {
  selectIsAuthenticated,
  selectIsLogginError,
  selectIsLogginIn,
} from 'src/app/store/selectors/authentication.selectors';

@Injectable()
export class LoginFacade {
  constructor(private store: Store) {}

  public get isAuthenticated(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated).pipe(first(isAuthenticated => isAuthenticated));
  }

  public get isLogginIn(): Observable<boolean> {
    return this.store.select(selectIsLogginIn);
  }

  public submitLogin(formValue: Partial<{ username: string; password: string }>): void {
    this.store.dispatch(
      authApiActions.loginRequest({ email: formValue.username!, password: formValue.password! })
    );
  }
}
