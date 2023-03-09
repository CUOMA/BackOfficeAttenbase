import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Questions } from '../../../../core/models/questions-response';
import { questionsApiActions } from '../../../../store/actions/question.action';
import {
  selectAreQuestionsLoading,
  selectQuestions,
} from '../../../../store/selectors/question.selectors';

@Injectable()
export class QuestionsFacade {
  public ELEMENT_DATA = [
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'borrador',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'archivada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'Pendiente',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'borrador',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'Pendiente',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'borrador',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'Pendiente',
    },
  ];
  public questionFilter!: any;
  color: ThemePalette = 'primary';
  mode: MatProgressSpinnerModule = 'indeterminate';
  isOpen: boolean = false;
  constructor(private store: Store) {}

  public get areQuestionsLoading(): Observable<boolean> {
    return this.store.select(selectAreQuestionsLoading);
  }

  public dispatchGetQuestions(pageNumber?: number): void {
    this.store.dispatch(questionsApiActions.getQuestionsRequest({ pageNumber: pageNumber ?? 1 }));
  }

  public getQuestionsa(selectedTab: string) {
    return (this.questionFilter = this.ELEMENT_DATA.filter(obj => obj.state === selectedTab));
  }

  public selectQuestions(): Observable<Questions> {
    return this.store.select(selectQuestions);
  }
  protected openMenu() {
    this.isOpen = !this.isOpen;
  }
}
