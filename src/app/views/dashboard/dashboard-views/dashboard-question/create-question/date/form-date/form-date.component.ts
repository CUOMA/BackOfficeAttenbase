import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Store } from '@ngrx/store';
import { CreateQuestionDate } from 'src/app/store/reducers/create-question.reducers';

@Component({
  selector: 'bdc-bo-form-date-component',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
})
export class FormDateComponent {
  @Output() sendDate = new EventEmitter<any>();

  @Input() postNow?: boolean;
  protected form: FormGroup = this.fb.nonNullable.group({
    dateFrom: [],
    dateTo: [],
    hourFrom: [],
    hourTo: [],
    caducity: false,
  });
  protected selectedDate!: CreateQuestionDate;

  protected onDateFromChange(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate.dateFrom = event.value;
    this.form.get('dateFrom')?.setValue(this.selectedDate.dateFrom);
    this.sendDate.emit(this.selectedDate.dateFrom);
  }
  protected isCheckboxChecked: boolean = false;
  dateFrom!: any;
  // dateTo!: Date | null;
  minDateFrom: Date = new Date();

  constructor(private fb: FormBuilder, private store: Store) {}

  protected onCheckboxChange(event: any) {
    this.isCheckboxChecked = event.checked;
    if (this.isCheckboxChecked) {
      this.form.get('dateTo')?.disable();
    } else {
      this.form.get('dateTo')?.enable();
    }
  }

  protected onDateToChange(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate.dateTo = event.value;
    this.form.get('dateTo')?.setValue(this.selectedDate.dateTo);
    this.sendDate.emit(this.selectedDate.dateTo);
    // this.form.get('dateTo')?.patchValue(event.value);
  }
}
