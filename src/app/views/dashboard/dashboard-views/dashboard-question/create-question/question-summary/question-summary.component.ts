import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { QuestionsService } from 'src/app/core/services/question.service';
import { createQuestionActions } from 'src/app/store/actions/create-question.actions';
import {
  selectCreateQuestionContent,
  selectCreateQuestionDate,
  selectCreateQuestionMetadata,
} from 'src/app/store/selectors/create-question.selectors';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';

@Component({
  selector: 'bdc-bo-question-summary',
  templateUrl: './question-summary.component.html',
  styleUrls: ['./question-summary.component.scss'],
})
export class QuestionSummaryComponent implements OnInit {
  protected preview$!: Observable<any>;
  protected facade = inject(DashboardCreateQuestionFacade);
  protected questionService = inject(QuestionsService);
  protected store = inject(Store);
  private router = inject(Router);

  ngOnInit(): void {
    this.preview$ = combineLatest([
      this.store.select(selectCreateQuestionMetadata),
      this.store.select(selectCreateQuestionContent),
      this.store.select(selectCreateQuestionDate),
    ]).pipe(
      map(([metadata, content, date]) => {
        return { ...metadata, ...content, ...date };
      })
    );
  }
  protected createQuestion() {
    this.preview$
      .pipe(
        map((data: any) => {
          const [published_hour, published_minutes] = data.hourTo.split(':');
          const published_at = new Date(data.dateTo);
          published_at.setHours(published_hour, published_minutes);
          return {
            name: data.question,
            category: data.category.id,
            subcategory: data.subcategory?.id,
            is_published_immediately: true,
            read_only: false,
            answers: [
              {
                long: data.resLong,
                short: data.resShort,
                channels: data.resIA,
              },
            ],
            related_question: [data.associatedQuestions.id],
            is_published: 1,
            is_archived: 0,
            published_at,
            archived_at: data.dateTo + data.hourTo,
          }
        }),
        switchMap(formData => this.questionService.postQuestions(formData))
      )
      .subscribe({
        next: () => {
          this.deleteLocalStore();
          this.router.navigateByUrl('dashboard/listado-de-preguntas');
        },
        error: (err: any) => {
          console.error(err);
        },
      });
  }
  protected deleteLocalStore(): void {
    this.store.dispatch(
      createQuestionActions.createMetadata({
        alias: undefined,
        associatedQuestions: [],
        category: [],
        subcategory: [],
        question: 'Crear Pregunta',
      })
    );
    this.store.dispatch(createQuestionActions.createContent(''));
    this.store.dispatch(createQuestionActions.createDate(''));
  }
}
