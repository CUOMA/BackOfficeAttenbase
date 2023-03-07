import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RecoveyPassword } from '../../../core/models/recovery-password';

@Injectable()
export class PasswordResetService {
  constructor(private httpClient: HttpClient) {}

  public recoveryPasword(payload: RecoveyPassword): any {
    return this.httpClient.post(`${environment.apiUrl}reset-password`, payload);
  }
}
