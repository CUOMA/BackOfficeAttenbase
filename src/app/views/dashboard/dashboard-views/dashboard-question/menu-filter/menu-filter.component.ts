import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bdc-bo-menu-filter',
  templateUrl: './menu-filter.component.html',
  styleUrls: ['./menu-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuFilterComponent {
  protected expression = true;
}
