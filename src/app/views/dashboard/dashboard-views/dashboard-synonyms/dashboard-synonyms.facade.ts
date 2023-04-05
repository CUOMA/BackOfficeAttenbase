import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectAreSynonymsLoading } from 'src/app/store/selectors/synonyms.selectors';
import { synonymsApiActions } from '../../../../store/actions/synonyms.action';
import { selectSynonyms } from '../../../../store/selectors/synonyms.selectors';

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
  public get areSynonymsLoading(): Observable<boolean> {
    return this.store.select(selectAreSynonymsLoading);
  }
  public dispatchGetSynonyms(): void {
    this.store.dispatch(synonymsApiActions.getSynonymsRequest());
  }
  public selectSynonyms(): Observable<any> {
    return this.store.select(selectSynonyms);
  }
}
