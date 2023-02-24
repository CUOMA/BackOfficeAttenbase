import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugComponent } from './debug.component';
import { DebugRoutingModule } from './debug-routing.module';

@NgModule({
  declarations: [DebugComponent],
  imports: [CommonModule, DebugRoutingModule],
})
export class DebugModule {}
