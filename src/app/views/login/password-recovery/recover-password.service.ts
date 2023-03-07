import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface ForgotPasswordResponse {
  code: number;
  data: string;
  success: boolean;
}
@Injectable()
export class RecoverPasswordService {
  constructor(private httpClient: HttpClient) {}

  public recoveryPasword(payload: { email: string }): Observable<ForgotPasswordResponse> {
    return this.httpClient.post<ForgotPasswordResponse>(
      `${environment.apiUrl}forgot-password`,
      payload
    );
  }
}
