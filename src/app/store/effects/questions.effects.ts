import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { forkJoin, of } from 'rxjs';
import { catchError, map, mergeMap, tap, filter } from 'rxjs/operators';
import { QuestionsService } from '../../core/services/question.service';
import { questionsApiActions } from '../actions/question.action';

@Injectable({ providedIn: 'root' })
export class QuestionsEffects {
  constructor(private actions$: Actions, private questionsService: QuestionsService) {}
  questions$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(questionsApiActions.getQuestionsRequest.type),
      mergeMap((action: Action & { pageNumber: number; status: string }) => {
        return this.questionsService.getQuestions(action.pageNumber, action.status).pipe(
          map(questions => questionsApiActions.getQuestionsSuccess(questions)),
          catchError(() =>
            of(questionsApiActions.getQuestionsFailure({ error: 'Error on questions' }))
          )
        );
      })
    );
  });
  deleteQuestion$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(questionsApiActions.deleteQuestionRequest.type),
      mergeMap((action: Action & { id: number }) => {
        return this.questionsService.deleteQuestions(action.id);
      })
    );
  });

  search$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(questionsApiActions.searchRequest.type),
      mergeMap((action: Action & { query: string }) => {
        return this.questionsService.searchQuestion(action.query).pipe(
          map((questions: any) => questionsApiActions.searchSuccess(questions)),
          catchError(() =>
            of(questionsApiActions.searchFailure({ error: 'Error on search question' }))
          )
        );
      })
    );
  });
}
