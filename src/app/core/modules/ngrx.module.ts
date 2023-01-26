import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers } from 'src/app/store/meta.reducers';
import { CustomSerializer } from 'src/app/store/utils/custom-route-serializer';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot(
      {
        router: routerReducer,
      },
      { metaReducers }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
      routerState: RouterState.Minimal,
    }),
    EffectsModule.forRoot([]),
  ],
  exports: [StoreModule, StoreDevtoolsModule, EffectsModule, StoreRouterConnectingModule],
})
export class NGRXModule {}
