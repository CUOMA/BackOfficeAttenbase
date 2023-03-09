import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { QuestionsResponse, Questions } from '../models/questions-response';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  private cache = new Map<number, QuestionsResponse>();

  constructor(private httpClient: HttpClient) {}

  public getQuestions(pageNumber: number): Observable<QuestionsResponse> {
    // if (this.cache.get(pageNumber)) {
    //   return of(this.cache.get(pageNumber)!);
    // }

    return this.httpClient
      .get<QuestionsResponse>(`${environment.apiUrl}questions?page=${pageNumber}`)
      .pipe(tap(res => this.cache.set(pageNumber, res)));
  }
}
