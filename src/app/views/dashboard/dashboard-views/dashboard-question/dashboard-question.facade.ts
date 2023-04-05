import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom, tap } from 'rxjs/operators';
import { Datum, Questions } from '../../../../core/models/questions-response';
import { questionsApiActions } from '../../../../store/actions/question.action';
import { statusesApiActions } from '../../../../store/actions/statuses.action';
import {
  selectAreQuestionsLoading,
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
  constructor(private store: Store) {}

  public get areQuestionsLoading(): Observable<boolean> {
    return this.store.select(selectAreQuestionsLoading);
  }

  public get areStatusesLoading(): Observable<boolean> {
    return this.store.select(selectAreStatusesLoading);
  }

  public getStatusTypes(): Observable<any> {
    return this.store.select(selectStatuses);
  }

  public dispatchGetQuestions(status: string, pageNumber?: number): void {
    this.store.dispatch(
      questionsApiActions.getQuestionsRequest({ pageNumber: pageNumber ?? 1, status: status })
    );
  }

  public dispatchGetStatuses(): void {
    this.store.dispatch(statusesApiActions.getStatusesRequest());
  }

  public selectQuestions(): Observable<Datum[]> {
    return this.store.select(selectQuestions).pipe(
      filter(questions => questions),
      withLatestFrom(this.getStatusTypes()),
      map(([questions, statusTypes]: [Questions, any]) =>
        questions.data.map(question => ({
          ...question,
          status: statusTypes.data.find((type: { id: number }) => type.id === question.status_id),
        }))
      )
    );
  }

  protected toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
