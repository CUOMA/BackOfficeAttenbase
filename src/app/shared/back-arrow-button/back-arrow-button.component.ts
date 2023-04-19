import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'bdc-bo-back-arrow-button',
  templateUrl: './back-arrow-button.component.html',
  styleUrls: ['./back-arrow-button.component.scss'],
})
export class BackArrowButtonComponent {
  constructor(private location: Location) {}

  back(): void {
    this.location.back();
  }
}
