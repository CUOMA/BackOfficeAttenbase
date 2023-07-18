import { Component, OnInit, inject } from '@angular/core';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';
import { Store } from '@ngrx/store';
import {
  selectCreateQuestionContent,
  selectCreateQuestionMetadata,
} from 'src/app/store/selectors/create-question.selectors';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bdc-bo-question-summary',
  templateUrl: './question-summary.component.html',
  styleUrls: ['./question-summary.component.scss'],
})
export class QuestionSummaryComponent implements OnInit {
  protected preview$!: Observable<any>;
  protected facade = inject(DashboardCreateQuestionFacade);
  protected store = inject(Store);
  ngOnInit(): void {
    const combinedData$ = combineLatest([
      this.store.select(selectCreateQuestionMetadata),
      this.store.select(selectCreateQuestionContent),
    ]).pipe(
      map(([metadata, content]) => {
        return { ...metadata, ...content };
      })
    );
    this.preview$ = combinedData$;
  }
  protected createQuestion() {
    // “category” => “required|exists:categories,id”,
    // “answers” => “required|array|min:1",
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
    this.deleteLocalStore();
  }
  protected deleteLocalStore(): void {
    localStorage.removeItem('datosFormulario');
  }
}
