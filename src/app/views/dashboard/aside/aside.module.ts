import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AsideComponent } from './aside.component';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [AsideComponent],
  imports: [CommonModule, SharedModule, RouterModule, NavModule],
  exports: [AsideComponent],
})
export class AsideModule {}
