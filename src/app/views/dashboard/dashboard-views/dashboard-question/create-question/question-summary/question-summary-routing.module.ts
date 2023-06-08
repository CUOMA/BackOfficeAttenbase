import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionSummaryComponent } from './question-summary.component';

const routes: Routes = [{ path: '', component: QuestionSummaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionSummaryRoutingModule {}
