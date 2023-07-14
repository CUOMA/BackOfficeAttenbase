import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DashboardCreateQuestionFacade } from '../../dashboard-create-question.facade';

@Component({
  selector: 'bdc-bo-form-date-component',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
})
export class FormDateComponent implements OnInit {
  @Input() postNow?: boolean;
  protected form!: FormGroup;
  protected isCheckboxChecked: boolean = false;
  protected dateFrom!: Date | null;
  protected dateTo!: Date | null;
  protected minDateFrom: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private createQuestionFacade: DashboardCreateQuestionFacade
  ) {}

  ngOnInit(): void {
    console.log(this.postNow);
    this.initForm();
    this.loadSavedData();
  }

  protected onCheckboxChange(event: any) {
    this.isCheckboxChecked = event.checked;
  }
  protected initForm() {
    this.form = this.fb.group({
      dateFrom: [null],
      dateTo: [null],
      hourFrom: [null],
      hourTo: [null],
      caducity: false,
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
