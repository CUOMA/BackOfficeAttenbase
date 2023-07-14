import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionsFacade } from '../../dashboard-question.facade';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';
import { DialogCreateCategoryComponent } from './dialog-create-category/dialog-create-category.component';
import { Store } from '@ngrx/store';
import { DataFormState } from 'src/app/store/reducers/data-form.reducers';
import { dataFormApiActions } from 'src/app/store/actions/data-form.actions';

@Component({
  selector: 'bdc-bo-metadata-question-component',
  templateUrl: './metadata-question.component.html',
  styleUrls: ['./metadata-question.component.scss'],
})
export class MetadataQuestionComponent implements OnInit {
  protected form!: FormGroup;
  protected listCategories$ = this.createQuestionFacade.selectListCategories();
  protected listSubcategories$ = this.createQuestionFacade.selectListSubcategories();
  protected areListSubcategoriesLoading$ = this.createQuestionFacade.areSubcategoriesLoading;
  private destroy$ = new Subject<void>();
  protected filteredOptions!: Observable<string[]>;
  protected addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  protected alias: Alias[] = [];
  protected selectedQuestions: string[] = [];

  constructor(
    private fb: FormBuilder,
    private createQuestionFacade: DashboardCreateQuestionFacade,
    private questionsFacade: QuestionsFacade,
    public dialog: MatDialog,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.setUpForm();
    this.createQuestionFacade.dispatchGetListCategories();
    this.loadSavedData();
  }

  private setUpForm() {
    this.form = this.fb.group({
      question: ['', [Validators.required]],
      alias: [[], [Validators.required]],
      category: ['General', [Validators.required]],
      subcategory: [{ value: '', disabled: true }],
      associatedQuestions: [[''], [Validators.required]],
    });
  }

  private loadSavedData(): void {
    const storedData = localStorage.getItem('datosFormulario');
    if (storedData) {
      const formData = JSON.parse(storedData);
      this.form.patchValue(formData);
    }
  }
  protected filterSubcategories(id: number) {
    this.form.get('subcategory')?.enable();
    this.createQuestionFacade.areSubcategoriesLoading.pipe(takeUntil(this.destroy$));
    this.createQuestionFacade.dispatchGetListSubcategories(id);
  }

  protected add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.alias.push({ name: value });
    }
    event.chipInput!.clear();
  }

  protected remove(alias: Alias): void {
    const index = this.alias.indexOf(alias);
    if (index >= 0) {
      this.alias.splice(index, 1);
    }
  }

  protected edit(alias: Alias, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(alias);
      return;
    }
    const index = this.alias.indexOf(alias);
    if (index >= 0) {
      this.alias[index].name = value;
    }
  }

  protected sendForm() {
    this.createQuestionFacade.formMetadaQuestion(this.form.value);

    const name = this.form.get('question')?.value;
    console.warn(name);
    // question: ['', [Validators.required]],
    // alias: [[], [Validators.required]],
    // category: ['General', [Validators.required]],
    // subcategory: [{ value: '', disabled: true }],
    // associatedQuestions: [[''], [Validators.required]],
    this.store.dispatch(dataFormApiActions.dataformrequest({ question: name }));
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
export interface Alias {
  name: string;
}
