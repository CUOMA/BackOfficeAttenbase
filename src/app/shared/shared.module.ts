import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { QuicklinkModule } from 'ngx-quicklink';
import { MaterialModule } from '../core/modules/material.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, QuicklinkModule],
  exports: [QuicklinkModule, MaterialModule],
})
export class SharedModule {}
