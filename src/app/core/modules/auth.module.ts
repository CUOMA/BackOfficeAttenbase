import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthenticationEffects } from 'src/app/store/effects/authentication.effects';
import {
  authenticationReducer,
  authFeatureKey,
} from 'src/app/store/reducers/authentication.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature(authFeatureKey, authenticationReducer),
    EffectsModule.forFeature([AuthenticationEffects]),
  ],
  exports: [EffectsModule, StoreModule],
})
export class AuthFeatureModule {}
