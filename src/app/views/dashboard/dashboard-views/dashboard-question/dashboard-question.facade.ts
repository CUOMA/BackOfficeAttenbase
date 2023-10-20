import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { filter, map, withLatestFrom, tap } from 'rxjs/operators';
import { Datum, Questions } from '../../../../core/models/questions-response';
import { questionsApiActions } from '../../../../store/actions/question.action';
import { statusesApiActions } from '../../../../store/actions/statuses.action';
import {
  selectAreQuestionsLoading,
  selectPaginator,
  selectQuestions,
} from '../../../../store/selectors/question.selectors';
import {
  selectAreStatusesLoading,
  selectStatuses,
} from '../../../../store/selectors/statuses.selectors';

@Injectable()
export class QuestionsFacade {
  public questionFilter!: any;
  protected color: ThemePalette = 'primary';
  protected mode: MatProgressSpinnerModule = 'indeterminate';
  protected isOpen: boolean = false;
  constructor(private store: Store) { }

  public get areQuestionsLoading(): Observable<boolean> {
    return this.store.select(selectAreQuestionsLoading);
  }

  public get areStatusesLoading(): Observable<boolean> {
    return this.store.select(selectAreStatusesLoading);
  }

  public getStatusTypes(): Observable<any> {
    return this.store.select(selectStatuses);
  }

  public dispatchGetQuestions(status: string, page = 0): void {
    this.store.dispatch(questionsApiActions.getQuestionsRequest({ status: status, page }));
  }

  public dispatchGetQuestionsSearch(query: string): void {
    this.store.dispatch(questionsApiActions.searchRequest({ query }));
  }

  public dispatchGetQuestionsFilter(payload: any): void {
    this.store.dispatch(questionsApiActions.filterQuestionRequest({
      categories: payload.categories,
      date_from: payload.date_from,
      date_to: payload.date_to,
      name: payload.name,
      status: payload.status,
      subCategories: payload.subCategories,
    }));
  }
  public dispatchGetStatuses(): void {
    this.store.dispatch(statusesApiActions.getStatusesRequest());
  }

  public selectQuestions(): Observable<Datum[]> {
    return this.store.select(selectQuestions);
  }

  public selectPaginator(): Observable<any> {
    return this.store.select(selectPaginator);
  }

  protected toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
