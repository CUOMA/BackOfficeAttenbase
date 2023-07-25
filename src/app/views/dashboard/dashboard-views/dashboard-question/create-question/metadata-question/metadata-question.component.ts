import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { createQuestionActions } from 'src/app/store/actions/create-question.actions';
import { selectCreateQuestionMetadata } from 'src/app/store/selectors/create-question.selectors';
import { QuestionsFacade } from '../../dashboard-question.facade';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';
import { DialogCreateCategoryComponent } from './dialog-create-category/dialog-create-category.component';

@Component({
  selector: 'bdc-bo-metadata-question-component',
  templateUrl: './metadata-question.component.html',
  styleUrls: ['./metadata-question.component.scss'],
})
export class MetadataQuestionComponent implements OnInit {
  protected form = this.fb.nonNullable.group({
    question: ['', [Validators.required]],
    alias: [[], [Validators.required]],
    category: ['General', [Validators.required]],
    subcategory: [{ value: '', disabled: true }],
    associatedQuestions: [[''], [Validators.required]],
  });
  protected listCategories$ = this.createQuestionFacade.selectListCategories();
  protected listSubcategories$ = this.createQuestionFacade.selectListSubcategories();
  protected areListSubcategoriesLoading$ = this.createQuestionFacade.areSubcategoriesLoading;
  private destroy$ = new Subject<void>();
  protected filteredOptions!: Observable<string[]>;
  protected addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  protected alias: string[] = [];
  protected selectedQuestions: string[] = [];
  protected idSubcategory!: number;
  protected idCategory!: number;

  constructor(
    private fb: FormBuilder,
    private createQuestionFacade: DashboardCreateQuestionFacade,
    private questionsFacade: QuestionsFacade,
    public dialog: MatDialog,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.createQuestionFacade.dispatchGetListCategories();
    this.loadFormData();
  }

  protected selectedSubcategory(id: number) {
    this.idSubcategory = id;
  }
  private loadFormData(): void {
    const storedForm$ = this.store.select(selectCreateQuestionMetadata);
    storedForm$.subscribe({
      next: res => {
        if (res) {
          this.alias = [...res.alias];
          this.form.patchValue(res);
        }
      },
    });
  }

  protected filterSubcategories(id: number) {
    this.form.get('subcategory')?.enable();
    this.idCategory = id;
    this.createQuestionFacade.areSubcategoriesLoading.pipe(takeUntil(this.destroy$));
    this.createQuestionFacade.dispatchGetListSubcategories(this.idCategory);
  }

  protected add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.alias.push(value);
    }
    event.chipInput!.clear();
  }

  protected remove(alias: string): void {
    const index = this.alias.indexOf(alias);
    if (index >= 0) {
      this.alias.splice(index, 1);
    }
  }

  protected edit(alias: string, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(alias);
      return;
    }
    const index = this.alias.indexOf(alias);
    if (index >= 0) {
      this.alias[index] = value;
    }
  }

  protected saveMetadata() {
    const combinedData = {
      ...this.form.value,
      idSubcategory: this.idSubcategory,
      idCategory: this.idCategory,
    };
    this.store.dispatch(createQuestionActions.createMetadata(combinedData));
  }

  protected handleSearch(query: any): void {
    this.questionsFacade.dispatchGetQuestionsSearch(query);
  }

  protected newCategory() {
    this.dialog.open(DialogCreateCategoryComponent, {
      width: '680px',
    });
  }

  protected handleSelectedQuestionsChange(selectedQuestions: string[]) {
    this.selectedQuestions = selectedQuestions;
    this.form.get('associatedQuestions')?.setValue(selectedQuestions);
  }
}
