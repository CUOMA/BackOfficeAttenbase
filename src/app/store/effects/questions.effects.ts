import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { QuestionsService } from '../../core/services/question.service';
import { questionsApiActions } from '../actions/question.action';

@Injectable()
export class QuestionsEffects {
  constructor(private actions$: Actions, private questionsService: QuestionsService) { }
  questions$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(questionsApiActions.getQuestionsRequest.type, questionsApiActions.filterQuestionRequest.type),
      mergeMap((action: Action & { page: number }) => {
        return this.questionsService.getQuestions(action.page).pipe(
          map(questions => questionsApiActions.getQuestionsSuccess(questions)),
          catchError(() =>
            of(questionsApiActions.getQuestionsFailure({ error: 'Error on questions' }))
          )
        );
      })
    );
  });


  search$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(questionsApiActions.searchRequest.type),
      mergeMap((action: Action & { query: string }) => {
        return this.questionsService.searchQuestion(action.query).pipe(
          map((questions: any) =>
            questionsApiActions.searchSuccess(questions)
          ),
          catchError(() =>
            of(questionsApiActions.searchFailure({ error: 'Error on search question' }))
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

  filter$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(questionsApiActions.filterQuestionRequest.type),
      mergeMap((action: Action & { filter: any }) => {
        return this.questionsService.filterQuestions(action.filter).pipe(
          map((questions: any) => questionsApiActions.searchSuccess(questions)),
          catchError(() =>
            of(questionsApiActions.searchFailure({ error: 'Error on filter question' }))
          )
        );
      })
    );
  });
}
