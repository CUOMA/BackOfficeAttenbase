import { OnInit, Component, Input } from '@angular/core';

@Component({
  selector: 'bdc-bo-tabla',
  templateUrl: './tabla.html',
  styleUrls: [],
})
export class TablaComponent {
  @Input() public questions?: any[];
}
