import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap, filter } from 'rxjs/operators';
import { QuestionsFacade } from 'src/app/views/dashboard/dashboard-views/dashboard-question/dashboard-question.facade';

@Component({
  selector: 'bdc-bo-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
})
export class MultiselectComponent implements OnInit, AfterViewInit {
  @Output() selectedQuestionsChange = new EventEmitter<string[]>();
  public open = false;
  protected readonly multiselect = new FormControl({ value: [''], disabled: false });
  protected questions$ = this.questionsFacade.selectQuestions();
  protected areQuestionsLoading$ = this.questionsFacade.areQuestionsLoading;
  private destroy$ = new Subject();
  protected selectedQuestions: any[] = [];

  @ViewChild('menu') menu!: ElementRef;

  constructor(private questionsFacade: QuestionsFacade, private renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    this.clickOut();
  }

  public ngOnInit(): void {
    this.searchQuestion();
    this.loadAssociatedQuestions();
  }
  protected loadAssociatedQuestions() {
    this.selectedQuestions = this.getLocalStorageData()?.associatedQuestions || [];
  }

  protected updateLocalStorage() {
    const formData = this.getLocalStorageData() || {};
    formData.associatedQuestions = this.selectedQuestions;
    localStorage.setItem('datosFormulario', JSON.stringify(formData));
  }

  private getLocalStorageData() {
    const storedData = localStorage.getItem('datosFormulario');
    return storedData ? JSON.parse(storedData) : null;
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
      this.selectedQuestions = [...this.selectedQuestions, question.name];
    } else {
      const index = this.selectedQuestions.indexOf(question.name);
      if (index !== -1) {
        this.selectedQuestions.splice(index, 1);
      }
    }
    this.selectedQuestionsChange.emit(this.selectedQuestions);
  }

  protected removeSelectedQuestion(index: number) {
    this.selectedQuestions.splice(index, 1);
    this.updateLocalStorage();
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
}
