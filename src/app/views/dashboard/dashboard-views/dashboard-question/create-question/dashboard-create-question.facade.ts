import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import { categoriesApiActions } from 'src/app/store/actions/categories.actions';
import {
  selectAreListSubcategoriesLoading,
  selectListCategories,
  selectListSubCategories,
} from 'src/app/store/selectors/list-categories.selectors';

@Injectable()
export class DashboardCreateQuestionFacade {
  public titleQuestion = new BehaviorSubject<string>('Crear pregunta');
  public formQuestion: FormQuestion = {
    question: '',
    alias: [],
    category: '',
    subcategory: '',
    associatedQuestions: [],
  };
  constructor(private store: Store) {}

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

  public formMetadaQuestion(formData: any) {
    this.titleQuestion.next(formData.question);
    this.formQuestion.question = formData.question;
    this.formQuestion.alias = formData.alias;
    this.formQuestion.category = formData.category;
    this.formQuestion.subcategory = formData.subcategory;
    this.formQuestion.associatedQuestions = formData.associatedQuestions;
    console.log(this.formQuestion.question);
  }
}

export interface FormQuestion {
  question: string;
  alias: string[];
  category: string;
  subcategory: string;
  associatedQuestions: string[];
}
