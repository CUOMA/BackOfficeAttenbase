import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Questions, QuestionsResponse } from '../models/questions-response';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  constructor(private httpClient: HttpClient) { }

  public getQuestions(pageNumber = 1): Observable<Questions> {
    return this.httpClient
      .get<QuestionsResponse>(`${environment.apiUrl}questions?limit=10&page=${pageNumber}`)
      .pipe(map(res => res.data));
  }

  public deleteQuestions(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}questions/${id}`);
  }

  public searchQuestion(payload: any) {
    return this.httpClient.post(`${environment.apiUrl}questions/filter`, { name: payload }).pipe(map((res: any) => res.data));
  }
  public postQuestions(payload: any) {
    return this.httpClient.post(`${environment.apiUrl}questions`, payload);
  }


  // const formData = {
  //   name: data.question,
  //   category: data.category.id,
  //   subcategory: data.subcategory.id,
  //   answers: [
  //     {
  //       long: data.resLong,
  //       short: data.resShort,
  //       channels: data.resIA,
  //     },
  //   ],
  //   related_question: [data.associatedQuestions.id],
  //   is_published: 1,
  //   is_archived: 0,
  //   published_at: data.dateFrom + data.hourFrom,
  //   archived_at: data.dateTo + data.hourTo,
  // };

  public filterQuestions(payload: any) {
    console.log(payload)
    return this.httpClient.post(`${environment.apiUrl}questions/filter`, payload).pipe(map((res: any) => res.data));
  }
  public showQuestions(path: any) {
    return this.httpClient.get(`${environment.apiUrl}questions/${path}`).pipe(map((res: any) => res.data));
  }
}

export interface SearchPayload {
  name?: string;
}