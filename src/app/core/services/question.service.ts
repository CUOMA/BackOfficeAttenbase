import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  constructor(private httpClient: HttpClient) {}
  public getQuestion() {
    return this.httpClient.get(`${environment.apiUrl}questions`);
  }
}
