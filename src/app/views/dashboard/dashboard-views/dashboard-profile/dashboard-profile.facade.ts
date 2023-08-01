import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/core/models/profile';
import { ProfileService } from 'src/app/core/services/profile.service';
import { profileApiActions } from 'src/app/store/actions/profile.action';
import { selectProfile } from 'src/app/store/selectors/profile.selectors';

@Injectable()
export class profileFacade {
  constructor(private store: Store, private service: ProfileService) {}

  public dispachProfile(): any {
    this.store.dispatch(profileApiActions.getProfileRequest());
  }

  public selectProfile(): Observable<any> {
    return this.store.select(selectProfile);
  }

  public postEditProfile(payload: Profile): Observable<any> {
    return this.service.editProfile(payload);
  }
}
