import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdc-bo-back-arrow-button',
  templateUrl: './back-arrow-button.component.html',
  styleUrls: ['./back-arrow-button.component.scss'],
})
export class BackArrowButtonComponent {
  @Input() public routeMap!: string;
}
