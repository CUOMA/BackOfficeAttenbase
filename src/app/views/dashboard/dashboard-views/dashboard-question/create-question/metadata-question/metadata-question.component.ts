import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';
import { DialogCreateCategoryComponent } from './dialog-create-category/dialog-create-category.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

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
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private createQuestionFacade: DashboardCreateQuestionFacade,
    public dialog: MatDialog
  ) {}
  public ngOnInit(): void {
    this.setUpForm();
    this.createQuestionFacade.dispatchGetListCategories();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  protected setUpForm() {
    this.form = this.fb.group({
      // hour: ['20:00', Validators.required],
      question: ['', [Validators.required]],
      alias: ['', [Validators.required]],
      category: ['', [Validators.required]],
      subcategory: [{ value: '', disabled: true }],
      associatedQuestions: [''],
    });
  }
  protected filterSubcategories(id: number) {
    this.form.get('subcategory')?.enable();
    this.createQuestionFacade.areSubcategoriesLoading.pipe(takeUntil(this.destroy$));
    this.createQuestionFacade.dispatchGetListSubcategories(id);
  }
  protected newCategory() {
    this.dialog.open(DialogCreateCategoryComponent, {
      width: '680px',
    });
  }
  protected sendForm() {
    const formData = this.form.value;
    console.log(formData);
    // this.createQuestionFacade.formMetadaQuestion(formData);
  }
}
