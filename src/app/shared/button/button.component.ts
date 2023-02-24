import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'bdc-bo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnChanges {
  @Input() public label!: string;
  @Input() public disabled!: boolean;

  public ward1 = '#c4000044';
  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('test');
  }
}
