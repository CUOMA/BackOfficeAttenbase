import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { usersApiActions } from 'src/app/store/actions/users.actions';
import { selectAreUsersLoading, selectUsers } from 'src/app/store/selectors/users.selectors';

@Injectable()
export class UsersFacade {
  constructor(private store: Store) {}

  public get areUsersLoading(): Observable<boolean> {
    return this.store.select(selectAreUsersLoading);
  }
  public dispatchGetUsers(): void {
    this.store.dispatch(usersApiActions.getUsersRequest());
  }
  public selectUsers(): Observable<any> {
    return this.store.select(selectUsers);
  }
}
