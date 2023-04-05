import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countAsideApiActions } from 'src/app/store/actions/count-aside.action';
import { map, filter } from 'rxjs/operators';
import {
  selectAreCountAsideLoading,
  selectCountAside,
} from 'src/app/store/selectors/count-aside.selectors';
import { Page } from 'src/app/core/models/page';

@Injectable()
export class NavFacade {
  constructor(private store: Store) {}

  public get areCountAsideLoading(): Observable<boolean> {
    return this.store.select(selectAreCountAsideLoading);
  }
  public dispatchGetCountAside(): void {
    this.store.dispatch(countAsideApiActions.getCountAsideRequest());
  }
  public selectCountAside(pagesIterable: Map<string, Page>): Observable<any> {
    return this.store.select(selectCountAside).pipe(
      filter(data => data),
      // eslint-disable-next-line @ngrx/avoid-mapping-selectors
      map((data: { categories_total: number; questions_total: number; synonyms_total: number }) => {
        const res = Object.entries(data);

        res.forEach((tuple: [string, number]) => {
          const iterableValue = pagesIterable.get(tuple[0]);

          if (iterableValue) {
            iterableValue.data = tuple[1];
          }
          pagesIterable.set(tuple[0], iterableValue!);
        });

        return Array.from(pagesIterable.values());
      })
    );
  }
}
