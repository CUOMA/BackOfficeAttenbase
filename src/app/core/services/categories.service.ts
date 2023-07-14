import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}
  public getCategories(page: number, order = 'ASC') {
    return this.httpClient.get(`${environment.apiUrl}categories?page=${page}&order=${order}`);
  }
  public deleteCategory(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}categories/${id}`);
  }
  public forceDelete(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}categories/${id}/force-delete`);
  }
  public getCategoriesList() {
    return this.httpClient.get(`${environment.apiUrl}categories-list`);
  }
  public getSubcategoriesList(id: number) {
    return this.httpClient.get(`${environment.apiUrl}subCategory-list/${id}`);
  }
  public postCategoryCreate(payload: any) {
    return this.httpClient.post(`${environment.apiUrl}categories`, payload);
  }
}
