import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardSynonymsRoutingModule } from './dashboard-synonyms-routing.module';
import { DashboardSynonymsComponent } from './dashboard-synonyms.component';
import { SynonymsFacade } from './dashboard-synonyms.facade';
import { ScrollSynonymsComponent } from './scroll-synonyms/scroll-synonyms.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { synonymsFeatureKey } from 'src/app/store/reducers/synonyms.reducers';
import { synonymsReducer } from '../../../../store/reducers/synonyms.reducers';
import { SynonymsEffects } from '../../../../store/effects/synonyms.effects';

@NgModule({
  providers: [SynonymsFacade],
  declarations: [DashboardSynonymsComponent, ScrollSynonymsComponent],
  imports: [
    CommonModule,
    DashboardSynonymsRoutingModule,
    SharedModule,
    StoreModule.forFeature(synonymsFeatureKey, synonymsReducer),
    EffectsModule.forFeature([SynonymsEffects]),
  ],
})
export class DashboardSynonymsModule {}
