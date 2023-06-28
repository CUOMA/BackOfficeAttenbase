import { Component, inject } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';

@Component({
  selector: 'bdc-bo-content-component',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  public Editor = ClassicEditor;
  public model = {
    answersLong: '',
    answersShort: '',
  };
  protected answersIA = '';
  public editorConfig = {
    language: 'es',
  };
  private createQuestionFacade = inject(DashboardCreateQuestionFacade);
  protected createAnswers: CreateAnswers[] = [
    {
      answersType: 'long',
      title: 'Respuesta larga',
      articleContent: 'Ingresá el contenido para el artículo.',
      data: '',
    },
    {
      answersType: 'short',
      title: 'Respuesta corta',
      articleContent: 'Ingresá un breve resumen del contenido.',
      data: '',
    },
  ];

  protected sendValue() {
    const res = {
      resLong: this.createAnswers[0].data,
      resShort: this.createAnswers[1].data,
      resIA: this.answersIA,
    };
    this.createQuestionFacade.formMetadaQuestion(res);
  }
}

export interface CreateAnswers {
  title: string;
  answersType: 'long' | 'chat' | 'short';
  articleContent: string;
  data: string;
}
