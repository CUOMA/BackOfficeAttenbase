import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSynonymsComponent } from './edit-synonyms.component';

const routes: Routes = [{ path: '', component: EditSynonymsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSynonymsRoutingModule {}
