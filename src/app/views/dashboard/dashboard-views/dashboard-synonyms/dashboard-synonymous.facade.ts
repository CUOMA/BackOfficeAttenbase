import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import {
  selectAreSynonymsLoading,
  selectSynonym,
} from 'src/app/store/selectors/synonyms.selectors';
import { synonymsApiActions } from '../../../../store/actions/synonyms.action';
import { selectSynonyms } from '../../../../store/selectors/synonyms.selectors';
import { SynonymsService } from 'src/app/core/services/synonyms.service';

@Injectable()
export class SynonymousFacade {
  constructor(
    private store: Store,
    private actions$: Actions,
    private synonymsService: SynonymsService
  ) {}

  public get areSynonymsLoading(): Observable<boolean> {
    return this.store.select(selectAreSynonymsLoading);
  }
  public dispatchGetSynonyms(page: number): void {
    this.store.dispatch(synonymsApiActions.getSynonymsRequest({ page: page }));
  }
  public selectSynonyms(): Observable<any> {
    return this.store.select(selectSynonyms);
  }
  public detailSynonym(id: number): Observable<any> {
    return this.store.select(selectSynonym(id));
  }
  public dispatchDeleteSynonymous(id: number): any {
    return this.store.dispatch(synonymsApiActions.deleteSynonymousRequest({ id }));
  }

  public isSynonymousUpdated(): Observable<any> {
    return this.actions$.pipe(first(), ofType(synonymsApiActions.deleteSynonymsSuccess));
  }
  public createSynonyms(form: any) {
    console.log(form);
    return this.synonymsService.postSynonymsCreate(form);
  }
}
