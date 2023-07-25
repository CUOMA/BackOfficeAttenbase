import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, switchMap } from 'rxjs/operators';
import { selectToken } from 'src/app/store/selectors/authentication.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationInterceptor implements HttpInterceptor {
  private store = inject(Store);
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(selectToken).pipe(
      first(),
      switchMap(token => {
        const clonedRequest = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        });
        return next.handle(token ? clonedRequest : req);
      })
    );
  }
}
