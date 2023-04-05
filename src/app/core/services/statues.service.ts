import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { StatusesResponse } from '../models/statuses-response';

@Injectable({ providedIn: 'root' })
export class StatusesService {
  constructor(private httpClient: HttpClient) {}
  public getStatues(): Observable<any> {
    return this.httpClient.get<StatusesResponse>(`${environment.apiUrl}statues`);
  }
}
