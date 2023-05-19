import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { QuestionsResponse, Questions } from '../models/questions-response';
import { tap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  private cache = new Map<number, Questions>();

  constructor(private httpClient: HttpClient) {}

  public getQuestions(pageNumber = 1, status: string): Observable<Questions> {
    // if (this.cache.get(pageNumber)) {
    //   return of(this.cache.get(pageNumber)!);
    // }
    return this.httpClient
      .get<QuestionsResponse>(
        `${environment.apiUrl}questions?limit=10&${status}=true&page=${pageNumber}`
      )
      .pipe(
        map(res => res.data),
        tap(res => this.cache.set(pageNumber, res))
      );
  }

  public deleteQuestions(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}questions/${id}`);
  }

  public searchQuestion(payload: any) {
    return this.httpClient.post(`${environment.apiUrl}questions/search`, payload);
  }
}
