import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { selectIsAuthenticated } from 'src/app/store/selectors/authentication.selectors';
import { authApiActions } from '../../store/actions/authentication.actions';

@Injectable()
export class DashboardFacade {
  constructor(private store: Store) {}

  public get isAuthenticated(): Observable<boolean> {
    return this.store
      .select(selectIsAuthenticated)
      .pipe(first(isAuthenticated => !isAuthenticated));
  }

  public logOut() {
    this.store.dispatch(authApiActions.logout({}));
  }
}
