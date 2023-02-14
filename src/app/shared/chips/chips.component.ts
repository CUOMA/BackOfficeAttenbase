import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'bdc-bo-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent implements OnChanges {
  @Input() public label!: string;
  @Input() public disabled!: boolean;

  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('test');
  }
}
