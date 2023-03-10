import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { forkJoin, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { QuestionsService } from '../../core/services/question.service';
import { questionsApiActions } from '../actions/question.action';

@Injectable({ providedIn: 'root' })
export class QuestionsEffects {
  constructor(private actions$: Actions, private questionsService: QuestionsService) {}
  categories$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(questionsApiActions.getQuestionsRequest.type),
      mergeMap((action: Action & { pageNumber: number }) => {
        return this.questionsService.getQuestions(action.pageNumber).pipe(
          map(questions => questionsApiActions.getQuestionsSuccess(questions.data)),
          catchError(() =>
            of(questionsApiActions.getQuestionsFailure({ error: 'Error on questions' }))
          )
        );
      })
    );
  });
}
