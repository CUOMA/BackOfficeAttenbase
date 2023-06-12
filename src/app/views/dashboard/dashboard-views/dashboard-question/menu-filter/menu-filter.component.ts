import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bdc-bo-menu-filter',
  templateUrl: './menu-filter.component.html',
  styleUrls: ['./menu-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuFilterComponent {
  @Output() closeMenuEmmiter = new EventEmitter();

  protected deleteFilters() {
    this.closeMenuEmmiter.emit();
  }
  protected expression = true;
}
