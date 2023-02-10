import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside.component';
import { SharedModule } from '../../../shared/shared.module';
import { NavModule } from './nav/nav.module';

@NgModule({
  declarations: [AsideComponent],
  imports: [CommonModule, SharedModule, RouterModule, NavModule],
  exports: [AsideComponent],
})
export class AsideModule {}
