import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';
import { selectListSubCategories } from '../../../../../../store/selectors/list-categories.selectors';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject, observable } from 'rxjs';

@Component({
  selector: 'bdc-bo-general-component',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class generalComponent implements OnInit {
  protected form!: FormGroup;
  protected listCategories$ = this.createQuestionFacade.selectListCategories();
  protected listSubcategories$ = this.createQuestionFacade.selectListSubcategories();
  protected areListSubcategoriesLoading$ = Observable<any>;
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private createQuestionFacade: DashboardCreateQuestionFacade
  ) {}
  public ngOnInit(): void {
    this.setUpForm();
    this.createQuestionFacade.dispatchGetListCategories();
  }
  protected setUpForm() {
    this.form = this.fb.group({
      question: ['', [Validators.required]],
      alias: ['', [Validators.required]],
      category: ['', [Validators.required]],
      subcategory: [''],
    });
  }
  protected filterSubcategories(id: number) {
    this.areListSubcategoriesLoading$ = this.createQuestionFacade.areSubcategoriesLoading.pipe(
      takeUntil(this.destroy$)
    );
    this.createQuestionFacade.dispatchGetListSubcategories(id);
    const formData = this.form.value;
    console.log(formData);
  }
  protected newCategory() {
    console.log('hola');
  }
}
