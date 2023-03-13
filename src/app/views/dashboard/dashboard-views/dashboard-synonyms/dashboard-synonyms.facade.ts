import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAreSynonymsLoading } from 'src/app/store/selectors/synonyms.selectors';
import { synonymsApiActions } from '../../../../store/actions/synonyms.action';

@Injectable()
export class SynonymsFacade {
  constructor(private store: Store) {}
  public deleteSynonim(): Observable<any> {
    return of([
      {
        position: 'Problemas de Señal',
        name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
      },
    ]);
  }
  public get areQuestionsLoading(): Observable<boolean> {
    return this.store.select(selectAreSynonymsLoading);
  }
  public dispatchGetSynonyms(): void {
    this.store.dispatch(synonymsApiActions.getSynonymsRequest());
  }
}
