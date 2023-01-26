import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside.component';

@NgModule({
  declarations: [AsideComponent],
  imports: [CommonModule, MatIconModule, RouterModule, MatButtonModule],
  exports: [AsideComponent],
})
export class AsideModule {}
