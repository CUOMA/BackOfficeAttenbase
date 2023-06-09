import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { synonymsFeatureKey } from 'src/app/store/reducers/synonyms.reducers';
import { SynonymsEffects } from '../../../../store/effects/synonyms.effects';
import { synonymsReducer } from '../../../../store/reducers/synonyms.reducers';
import { DashboardSynonymsRoutingModule } from './dashboard-synonyms-routing.module';
import { DashboardSynonymsComponent } from './dashboard-synonyms.component';
import { SynonymsFacade } from './dashboard-synonyms.facade';
import { ScrollSynonymsComponent } from './table/scroll-synonyms/scroll-synonyms.component';
import { TableSynonymsComponent } from './table/table-synonyms.component';

@NgModule({
  providers: [SynonymsFacade],
  declarations: [DashboardSynonymsComponent, ScrollSynonymsComponent, TableSynonymsComponent],
  imports: [
    CommonModule,
    DashboardSynonymsRoutingModule,
    SharedModule,
    StoreModule.forFeature(synonymsFeatureKey, synonymsReducer),
    EffectsModule.forFeature([SynonymsEffects]),
  ],
})
export class DashboardSynonymsModule {}
