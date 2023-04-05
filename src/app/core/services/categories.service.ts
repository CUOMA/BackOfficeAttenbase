import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}
  public getCategories() {
    return this.httpClient.get(`${environment.apiUrl}categories`);
  }
  public deleteCategory(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}categories/${id}`);
  }
}