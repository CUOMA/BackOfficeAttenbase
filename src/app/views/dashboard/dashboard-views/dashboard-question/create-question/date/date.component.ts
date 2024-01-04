import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { createQuestionActions } from 'src/app/store/actions/create-question.actions';

@Component({
  selector: 'bdc-bo-date-component',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  private dialog = inject(MatDialog);
  protected createDate!: any[];
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

  protected openMenu(opcion: any) {
    this.postOptions.forEach(item => {
      item.isOpen = item.id === opcion.id;
    });
  }

  protected selectedDate(formDate: any[]) {
    this.createDate = formDate;
    console.log(this.createDate);
  }
  protected saveDate() {}
}
