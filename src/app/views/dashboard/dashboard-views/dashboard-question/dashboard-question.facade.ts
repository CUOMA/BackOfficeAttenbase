import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { sample, withLatestFrom, map, tap } from 'rxjs/operators';
import { Questions } from '../../../../core/models/questions-response';
import { questionsApiActions } from '../../../../store/actions/question.action';
import {
  selectAreStatusesLoading,
  selectStatuses,
} from '../../../../store/selectors/statuses.selectors';
import { statusesApiActions } from '../../../../store/actions/statuses.action';
import { QuestionStatus } from '../../../../core/models/statuses-response';
import {
  selectAreQuestionsLoading,
  selectQuestions,
} from '../../../../store/selectors/question.selectors';

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

  public dispatchGetQuestions(pageNumber?: number): void {
    this.store.dispatch(questionsApiActions.getQuestionsRequest({ pageNumber: pageNumber ?? 1 }));
  }

  public dispatchGetStatuses(): void {
    this.store.dispatch(statusesApiActions.getStatusesRequest());
  }

  public selectQuestions(selectedTab: string): Observable<Questions> {
    return this.store.select(selectQuestions).pipe(
      withLatestFrom(this.getStatusTypes()),
      map(([questions, statusTypes]: [Questions, any]) => {
        return {
          ...questions,
          data: questions.data
            .map(question => ({
              ...question,
              status: statusTypes.payload.find(
                (type: { id: number }) => type.id === question.status_id
              ),
            }))
            .filter((data: any) => data.status.class === selectedTab),
        };
      }),
      tap(console.log)
    );
  }

  protected toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
