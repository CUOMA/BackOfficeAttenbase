import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';

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
    answersChat: '',
  };
  public editorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        'blockQuote',
        'uploadImage',
        '|',
        'undo',
        'redo',
      ],
    },
    language: 'es',
  };
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

  protected obtenerValores() {
    for (let createAnswer of this.createAnswers) {
      const ngModelValue = { type: createAnswer.answersType, data: createAnswer.data };
      console.log(ngModelValue);
    }
  }
}

export interface CreateAnswers {
  title: string;
  answersType: 'long' | 'chat' | 'short';
  articleContent: string;
  data: string;
}
