import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';

@Component({
  selector: 'bdc-bo-date-component',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  protected form!: FormGroup;

  protected dateFrom!: Date | null;
  protected dateTo!: Date | null;
  protected minDateFrom: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private createQuestionFacade: DashboardCreateQuestionFacade
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadSavedData();
  }

  protected initForm() {
    this.form = this.fb.group({
      dateFrom: [null, Validators.required],
      dateTo: [null, Validators.required],
      hourFrom: [null, Validators.required],
      hourTo: [null, Validators.required],
    });
  }

  protected onDateFromChange(event: MatDatepickerInputEvent<Date>) {
    this.dateFrom = event.value;
  }

  protected onDateToChange(event: MatDatepickerInputEvent<Date>) {
    this.dateTo = event.value;
  }

  private loadSavedData(): void {
    const storedData = localStorage.getItem('datosFormulario');
    if (storedData) {
      const formData = JSON.parse(storedData);
      this.form.patchValue(formData);
    }
  }

  protected sendValue() {
    const res = this.form.value;
    this.createQuestionFacade.formMetadaQuestion(res);
  }
}
