import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { StatusesResponse } from '../models/statuses-response';

@Injectable({ providedIn: 'root' })
export class StatusesService {
  constructor(private httpClient: HttpClient) {}
  public getStatues(): Observable<{ payload: any[] }> {
    // return this.httpClient.get<StatusesResponse>(`${environment.apiUrl}statues`);
    return of({
      payload: [
        { id: 1, name: 'En revisión', class: 'review' },
        { id: 2, name: 'Aprobada', class: 'approved' },
        { id: 3, name: 'Pausada', class: 'scheduled' },
        { id: 4, name: 'Fuera de vigencia', class: 'expire' },
        { id: 5, name: 'borrador', class: 'draft' },
      ],
    });
  }
}
