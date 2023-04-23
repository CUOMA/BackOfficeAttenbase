import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}
  public getCategories(page: number) {
    return this.httpClient.get(`${environment.apiUrl}categories?page=${page}`);
  }
  public deleteCategory(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}categories/${id}`);
  }
  public getCategoriesList() {
    return this.httpClient.get(`${environment.apiUrl}categories-list`);
  }
  public getSubcategoriesList(id: number) {
    return this.httpClient.get(`${environment.apiUrl}subCategory-list/${id}`);
  }
}
