import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { QuestionsFacade } from 'src/app/views/dashboard/dashboard-views/dashboard-question/dashboard-question.facade';

@Component({
  selector: 'bdc-bo-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
})
export class MultiselectComponent implements OnInit {
  protected open = false;
  protected readonly multiselect = new FormControl({ value: [''], disabled: false });
  protected questions$ = this.questionsFacade.selectQuestions();
  private destroy$ = new Subject();
  protected selectedQuestions: any[] = [];

  constructor(private questionsFacade: QuestionsFacade) {}

  public ngOnInit(): void {
    this.multiselect.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        tap((data: any) => {
          const query = data;
          this.questionsFacade.dispatchGetQuestionsSearch(query);
          this.toggleMenu();
        })
      )
      .subscribe();
  }
  updateSelectedQuestions(question: any, event: any) {
    if (event.checked) {
      this.selectedQuestions = [...this.selectedQuestions, question.name];
      this.multiselect.setValue(this.selectedQuestions);
    } else {
      const index = this.selectedQuestions.findIndex(
        selectedQuestion => selectedQuestion.id === question.id
      );
      if (index !== -1) {
        this.selectedQuestions.splice(index, 1);
      }
    }
  }

  protected toggleMenu() {
    this.open = !this.open;
  }
}
