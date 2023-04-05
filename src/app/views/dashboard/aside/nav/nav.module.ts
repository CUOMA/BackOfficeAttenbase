import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavComponent } from './nav.component';
import { NavFacade } from './nav.facade';

@NgModule({
  providers: [NavFacade],
  declarations: [NavComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [NavComponent],
})
export class NavModule {}
