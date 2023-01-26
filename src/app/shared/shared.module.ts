import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { QuicklinkModule } from 'ngx-quicklink';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, QuicklinkModule, MatSidenavModule, MatButtonModule, MatIconModule],
  exports: [QuicklinkModule],
})
export class SharedModule {}
