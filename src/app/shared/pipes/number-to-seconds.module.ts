import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberToSecondsPipe } from './number-to-seconds.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [NumberToSecondsPipe],
  exports: [NumberToSecondsPipe],
})
export class NumberToSecondsModule {}
