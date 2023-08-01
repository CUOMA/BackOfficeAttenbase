import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private httpClient: HttpClient) {}
  public getProfile() {
    return this.httpClient.get(`${environment.apiUrl}profile`);
  }
  public editProfile(payload: Profile) {
    return this.httpClient.put(`${environment.apiUrl}profile/update`, payload);
  }
}
