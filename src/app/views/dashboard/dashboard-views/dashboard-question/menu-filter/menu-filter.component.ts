import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardCreateQuestionFacade } from '../create-question/dashboard-create-question.facade';
import { QuestionsFacade } from '../dashboard-question.facade';

@Component({
  selector: 'bdc-bo-menu-filter',
  templateUrl: './menu-filter.component.html',
  styleUrls: ['./menu-filter.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuFilterComponent implements OnInit {
  protected form!: FormGroup;
  protected dateRange!: FormGroup;
  protected states$ = this.createQuestionFacade.selectListStatues();
  protected listCategories$ = this.createQuestionFacade.selectListCategories();
  protected listSubcategories$ = this.createQuestionFacade.selectListSubcategories();
  constructor(
    private fb: FormBuilder,
    private createQuestionFacade: DashboardCreateQuestionFacade,
    private questionsFacade: QuestionsFacade
  ) {}

  ngOnInit(): void {
    this.setUpForm();
  }

  protected setUpForm() {
    this.dateRange = this.fb.group({
      start: '',
      end: '',
    });
    this.form = this.fb.group({
      state: [''],
      category: [''],
      subcategory: [{ value: '', disabled: true }],
    });
  }

  protected filterCategories(id: number) {
    this.form.get('subcategory')?.enable();
    this.createQuestionFacade.dispatchGetListSubcategories(id);
  }

  protected applyFilters() {
    let form = {
      date: this.dateRange.get('start')?.value + this.dateRange.get('end')?.value,
      status: this.form.get('state')?.value,
      category: this.form.get('category')?.value,
      subcategory: this.form.get('subCategory')?.value,
    };
    alert(JSON.stringify(form));
    this.questionsFacade.dispatchGetQuestions(form.status, 1);
  }
}
