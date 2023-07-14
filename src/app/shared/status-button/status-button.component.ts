import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdc-bo-status-button',
  templateUrl: './status-button.component.html',
  styleUrls: ['./status-button.component.scss'],
})
export class StatusButtonComponent {
  @Input() class!: string;
  @Input() name!: string;
}
