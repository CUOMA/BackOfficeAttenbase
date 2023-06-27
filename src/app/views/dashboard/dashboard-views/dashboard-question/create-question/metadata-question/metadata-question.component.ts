import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';
import { DialogCreateCategoryComponent } from './dialog-create-category/dialog-create-category.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'bdc-bo-metadata-question-component',
  templateUrl: './metadata-question.component.html',
  styleUrls: ['./metadata-question.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class MetadataQuestionComponent implements OnInit {
  protected form!: FormGroup;
  protected listCategories$ = this.createQuestionFacade.selectListCategories();
  protected listSubcategories$ = this.createQuestionFacade.selectListSubcategories();
  protected areListSubcategoriesLoading$ = this.createQuestionFacade.areSubcategoriesLoading;
  private destroy$ = new Subject<void>();
  protected selectedOption = 'General';
  protected filteredOptions!: Observable<string[]>;
  protected addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  protected alias: Alias[] = [];
  open = false;

  constructor(
    private fb: FormBuilder,
    private createQuestionFacade: DashboardCreateQuestionFacade,
    public dialog: MatDialog
  ) {}
  public ngOnInit(): void {
    this.setUpForm();
    this.createQuestionFacade.dispatchGetListCategories();
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || ''))
    // );
  }
  toggleMenu() {
    this.open = !this.open;
  }
  protected setUpForm() {
    this.form = this.fb.group({
      question: ['', [Validators.required]],
      alias: [[], [Validators.required]],
      category: ['', [Validators.required]],
      subcategory: [{ value: '', disabled: true }],
      // associatedQuestions: [''],
    });
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
  }

  protected newCategory() {
    this.dialog.open(DialogCreateCategoryComponent, {
      width: '680px',
    });
  }
}
export interface Alias {
  name: string;
}
