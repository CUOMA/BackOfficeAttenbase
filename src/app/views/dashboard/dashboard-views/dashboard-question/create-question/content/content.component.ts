import { Component, OnInit, inject } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';
import { Store } from '@ngrx/store';
import { createQuestionActions } from 'src/app/store/actions/create-question.actions';
import { selectCreateQuestionContent } from 'src/app/store/selectors/create-question.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bdc-bo-content-component',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  protected Editor = ClassicEditor;
  private store = inject(Store);
  public model = {
    answersLong: '',
    answersShort: '',
  };
  protected answersIA = '';
  public editorConfig = {
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

  public ngOnInit(): void {
    this.loadSavedData();
  }

  protected sendValue() {
    const res = {
      resLong: this.createAnswers[0].data,
      resShort: this.createAnswers[1].data,
      resIA: this.answersIA,
    };
    this.store.dispatch(createQuestionActions.createContent(res));
  }

  protected loadSavedData(): void {
    const storedForm$ = this.store
      .select(selectCreateQuestionContent)
      .pipe(
        map(
          (data: any) => (
            (this.createAnswers[0].data = data.resLong),
            (this.createAnswers[1].data = data.resShort),
            (this.answersIA = data.resIA)
          )
        )
      )
      .subscribe();
  }
}

export interface CreateAnswers {
  title: string;
  answersType: 'long' | 'chat' | 'short';
  articleContent: string;
  data: string;
}
