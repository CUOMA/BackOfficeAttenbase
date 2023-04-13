import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  selectAreSynonymsLoading,
  selectSynonym,
} from 'src/app/store/selectors/synonyms.selectors';
import { synonymsApiActions } from '../../../../store/actions/synonyms.action';
import { selectSynonyms } from '../../../../store/selectors/synonyms.selectors';

@Injectable()
export class SynonymsFacade {
  constructor(private store: Store) {}

  public get areSynonymsLoading(): Observable<boolean> {
    return this.store.select(selectAreSynonymsLoading);
  }
  public dispatchGetSynonyms(): void {
    this.store.dispatch(synonymsApiActions.getSynonymsRequest());
  }
  public selectSynonyms(): Observable<any> {
    return this.store.select(selectSynonyms);
  }
  public detailSynonym(id: number): Observable<any> {
    return this.store.select(selectSynonym(id));
  }
}
