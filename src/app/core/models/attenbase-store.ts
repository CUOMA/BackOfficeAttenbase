import { RouterReducerState } from '@ngrx/router-store';
import { AuthenticationState } from 'src/app/store/reducers/authentication.reducers';

export interface AttenbaseStore {
  auth: AuthenticationState;
  router: RouterReducerState<any>;
}
