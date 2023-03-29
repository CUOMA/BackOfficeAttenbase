import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSynonymComponent } from './new-synonym.component';

const routes: Routes = [{ path: '', component: NewSynonymComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSynonymRoutingModule {}
