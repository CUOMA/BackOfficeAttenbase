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
  protected isOpen = false;
  protected dateFrom!: Date | null;
  protected dateTo!: Date | null;
  protected minDateFrom: Date = new Date();
  protected postOptions = [
    {
      id: 1,
      label: 'Programar publicacion',
      postNow: false,
      isOpen: false,
    },
    {
      id: 2,
      label: 'Publicar ahora',
      postNow: true,
      isOpen: false,
    },
    {
      id: 3,
      label: 'Guardar como borrador',
      postNow: false,
      isOpen: false,
    },
  ];

  constructor(
    private fb: FormBuilder,
    private createQuestionFacade: DashboardCreateQuestionFacade
  ) {}

  ngOnInit(): void {
    console.log('');
  }
  openMenu(opcion: any) {
    this.postOptions.forEach(item => {
      item.isOpen = item.id === opcion.id;
    });
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
