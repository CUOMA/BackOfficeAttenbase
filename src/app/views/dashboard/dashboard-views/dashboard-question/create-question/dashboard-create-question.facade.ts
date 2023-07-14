import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import { categoriesApiActions } from 'src/app/store/actions/categories.actions';
import {
  selectAreListSubcategoriesLoading,
  selectListCategories,
  selectListSubCategories,
} from 'src/app/store/selectors/list-categories.selectors';

@Injectable({
  providedIn: 'root',
})
export class DashboardCreateQuestionFacade {
  public formQuestion?: FormQuestion;
  private createQuestionTitle$ = new BehaviorSubject('Crear Pregunta');

  constructor(private store: Store) {}

  public get createQuestionTitle(): Observable<string> {
    return this.createQuestionTitle$.asObservable();
  }

  public dispatchGetListCategories(): void {
    this.store.dispatch(categoriesApiActions.getListCategoriesRequest());
  }

  public dispatchGetListSubcategories(id: number): void {
    this.store.dispatch(categoriesApiActions.getListSubcategoriesRequest({ id }));
  }

  public selectListCategories(): Observable<any> {
    return this.store.select(selectListCategories);
  }

  public selectListSubcategories(): Observable<any> {
    return this.store.select(selectListSubCategories);
  }

  public get areSubcategoriesLoading(): Observable<boolean> {
    return this.store.select(selectAreListSubcategoriesLoading);
  }

  public formMetadaQuestion(formData?: any, res?: any) {
    this.formQuestion = { ...this.formQuestion, ...formData, ...res };
    localStorage.setItem('datosFormulario', JSON.stringify(this.formQuestion));
  }
}

export interface FormQuestion {
  question: string;
  alias: string[];
  category: string;
  subcategory: string;
  associatedQuestions: string[];
  answersIA: string;
  answersLong: string;
  answersShort: string;
  dateFrom: string;
  dateTo: string;
  hourFrom: string;
  hourTo: string;
}
