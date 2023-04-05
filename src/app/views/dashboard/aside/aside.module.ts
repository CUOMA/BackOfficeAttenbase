import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AsideComponent } from './aside.component';
import { NavModule } from './nav/nav.module';
import {
  countAsideFeatureKey,
  countAsideReducer,
} from 'src/app/store/reducers/count-aside.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CountAsideEffects } from 'src/app/store/effects/count-aside.effects';

@NgModule({
  declarations: [AsideComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NavModule,
    StoreModule.forFeature(countAsideFeatureKey, countAsideReducer),
    EffectsModule.forFeature([CountAsideEffects]),
  ],
  exports: [AsideComponent],
})
export class AsideModule {}
