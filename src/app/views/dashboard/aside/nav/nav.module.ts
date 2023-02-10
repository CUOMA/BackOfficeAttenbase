import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [NavComponent],
})
export class NavModule {}
