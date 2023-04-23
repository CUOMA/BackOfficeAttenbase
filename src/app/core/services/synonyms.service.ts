import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SynonymsService {
  constructor(private httpClient: HttpClient) {}
  public getSynonyms(page: number) {
    return this.httpClient.get(`${environment.apiUrl}synonyms?page=${page}`);
  }
}
