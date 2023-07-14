import { Component, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DashboardCreateQuestionFacade } from './dashboard-create-question.facade';

@Component({
  selector: 'bdc-bo-dashboard-create-question',
  templateUrl: './dashboard-create-question.component.html',
  styleUrls: ['./dashboard-create-question.component.scss'],
})
export class DashboardCreateQuestionComponent implements OnInit {
  // private createQuestionFacade = inject(DashboardCreateQuestionFacade);
  title$!: Observable<string>;
  // private titleSubject = new BehaviorSubject<string>('Crear pregunta');

  ngOnInit(): void {
    console.log('hola');
  }
}
