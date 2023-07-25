import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Store } from '@ngrx/store';
import { createQuestionActions } from 'src/app/store/actions/create-question.actions';
import { CreateQuestionDate } from 'src/app/store/reducers/create-question.reducers';

@Component({
  selector: 'bdc-bo-form-date-component',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
})
export class FormDateComponent implements OnInit {
  @Output() formDataReady = new EventEmitter<any>();
  @Input() postNow?: boolean;
  protected form: FormGroup = this.fb.group({
    dateFrom: [],
    dateTo: [],
    hourFrom: [],
    hourTo: [],
    caducity: false,
  });
  protected selectedDate!: CreateQuestionDate;
  protected isCheckboxChecked: boolean = false;
  dateFrom!: any;
  dateTo!: Date | null;
  minDateFrom: Date = new Date();

  constructor(private fb: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.dispachInitForm();
    this.dispachFormValue();
  }

  protected dispachInitForm() {
    this.store.dispatch(createQuestionActions.createDate(''));
  }
  protected dispachFormValue() {
    this.form.valueChanges.subscribe(formData => {
      this.store.dispatch(createQuestionActions.createDate(formData));
    });
  }
  protected onCheckboxChange(event: any) {
    this.isCheckboxChecked = event.checked;
    if (this.isCheckboxChecked) {
      this.form.get('dateTo')?.disable();
      this.form.get('dateTo')?.setValue(null);
      this.form.get('hourTo')?.setValue(null);
    } else {
      this.form.get('dateTo')?.enable();
    }
  }

  protected onDateFromChange(event: MatDatepickerInputEvent<Date>) {
    if (this.selectedDate) {
      this.selectedDate.dateFrom = event.value;
      this.dateFrom = event.value;
      this.form.get('dateFrom')?.setValue(this.selectedDate.dateFrom);
    }
  }

  protected onDateToChange(event: MatDatepickerInputEvent<Date>) {
    if (this.selectedDate) {
      this.selectedDate.dateTo = event.value;
      this.form.get('dateTo')?.setValue(this.selectedDate.dateTo);
    }
  }
}
