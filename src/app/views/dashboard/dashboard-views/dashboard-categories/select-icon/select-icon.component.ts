import { Component } from '@angular/core';

@Component({
  selector: 'bdc-bo-select-icon',
  templateUrl: './select-icon.component.html',
  styleUrls: ['./select-icon.component.scss'],
})
export class SelectIconComponent {
  protected panelOpenState = false;
  protected iconsSocial = [
    { name: 'sentiment_satisfied' },
    { name: 'group' },
    { name: 'handshake' },
    { name: 'public' },
    { name: 'water_drop' },
    { name: 'support_agent' },
  ];
  constructor() {}
}
