import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Authentication } from '../models/authentication.dto';
import { map } from 'rxjs/operators';
import { Request } from '../models/request';
import { LoginPayload } from '../models/login-payload';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  public login(payload: LoginPayload): Observable<Authentication> {
    const url = `${environment.apiUrl}login-user`;
    return this.httpClient.post<Request<Authentication>>(url, payload).pipe(map(req => req.data));
  }
}
