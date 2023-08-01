import { Component, OnInit, inject } from '@angular/core';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';
import { Store } from '@ngrx/store';
import {
  selectCreateQuestionContent,
  selectCreateQuestionDate,
  selectCreateQuestionMetadata,
} from 'src/app/store/selectors/create-question.selectors';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { createQuestionActions } from 'src/app/store/actions/create-question.actions';
import { QuestionsService } from 'src/app/core/services/question.service';

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
          const formData = {
            name: data.question,
            category: data.category.id,
            subcategory: data.subcategory.id,
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
            published_at: data.dateFrom + data.hourFrom,
            archived_at: data.dateTo + data.hourTo,
          };
          this.questionService.postQuestions(formData).subscribe();
          this.deleteLocalStore();
        })
      )
      .subscribe();

    // ‘answers.*.long’ => ‘required|string’,
    // ‘answers.*.short’ => ‘required|string|max:255’,
    // ‘answers.*.channels.*’ => ‘required|string|max:255’,
    // //‘sticky’ => ‘required|boolean’,
    // ‘read_only’ => ‘required|boolean’,
    // //‘commercial_content’ => ‘required|boolean’,
    // ‘is_published’ => ‘required|boolean’,
    // ‘is_archived’ => ‘required|boolean’,
    // ‘is_published_immediately’ => ‘required_if:is_published,1|nullable|boolean’,
    // ‘is_archived_immediately’ => ‘required_if:is_archived,1|nullable|boolean’,
    // // ‘published_at’ => ‘required_if:is_published_immediately,0’,
    // // ‘archived_at’ => ‘required_if:is_archived_immediately,0’,
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
