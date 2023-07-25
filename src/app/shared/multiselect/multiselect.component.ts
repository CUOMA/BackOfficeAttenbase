import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap, map } from 'rxjs/operators';
import { createQuestionActions } from 'src/app/store/actions/create-question.actions';
import { selectCreateQuestionMetadata } from 'src/app/store/selectors/create-question.selectors';
import { selectQuestions } from 'src/app/store/selectors/question.selectors';
import { QuestionsFacade } from 'src/app/views/dashboard/dashboard-views/dashboard-question/dashboard-question.facade';

@Component({
  selector: 'bdc-bo-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
})
export class MultiselectComponent implements OnInit, AfterViewInit {
  private store = inject(Store);

  @Output() selectedQuestionsChange = new EventEmitter<string[]>();
  public open = false;
  protected readonly multiselect = new FormControl({ value: [''], disabled: false });
  protected questions$ = this.store.select(selectQuestions).pipe(map(res => res.data));
  protected areQuestionsLoading$ = this.questionsFacade.areQuestionsLoading;
  private destroy$ = new Subject();
  protected selectedQuestions: any[] = [];

  @ViewChild('menu') menu!: ElementRef;

  constructor(private questionsFacade: QuestionsFacade, private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.searchQuestion();
    this.loadSelectedQuestions();
  }

  public ngAfterViewInit(): void {
    this.clickOut();
  }

  protected searchQuestion() {
    this.multiselect.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        tap((data: any) => {
          this.open = true;
          this.questionsFacade.dispatchGetQuestionsSearch(data);
        })
      )
      .subscribe();
  }
  protected updateSelectedQuestions(question: any, event: any) {
    if (event.checked) {
      this.selectedQuestions = [...this.selectedQuestions, question];
    } else {
      const index = this.selectedQuestions.indexOf(question);
      if (index !== -1) {
        this.selectedQuestions.splice(index, 1);
      }
    }
    this.selectedQuestionsChange.emit(this.selectedQuestions);
  }

  protected removeSelectedQuestion(index: number) {
    this.selectedQuestions.splice(index, 1);
    this.selectedQuestionsChange.emit(this.selectedQuestions);
  }

  protected clickOut() {
    this.renderer.listen('document', 'click', (event: MouseEvent) => {
      const isClickedInside = this.menu.nativeElement.contains(event.target);
      if (!isClickedInside) {
        this.open = false;
      }
    });
  }

  private loadSelectedQuestions(): void {
    this.store.select(selectCreateQuestionMetadata).subscribe({
      next: res => {
        if (res?.associatedQuestions) {
          this.selectedQuestions = [...res?.associatedQuestions];
        }
      },
    });
  }
}
