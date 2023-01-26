import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToSeconds',
})
export class NumberToSecondsPipe implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = value - minutes * 60;
    return '(' + (seconds >= 10 ? seconds : '0' + seconds) + 'seg' + ')';
  }
}
