import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';
import { DialogCreateCategoryComponent } from './dialog-create-category/dialog-create-category.component';

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

  constructor(
    private fb: FormBuilder,
    private createQuestionFacade: DashboardCreateQuestionFacade,
    public dialog: MatDialog
  ) {}
  public ngOnInit(): void {
    this.setUpForm();
    // this.areListSubcategoriesLoading$.subscribe(console.log);
    this.createQuestionFacade.dispatchGetListCategories();
  }
  protected setUpForm() {
    this.form = this.fb.group({
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
    this.createQuestionFacade.formMetadaQuestion(formData);
  }
}
