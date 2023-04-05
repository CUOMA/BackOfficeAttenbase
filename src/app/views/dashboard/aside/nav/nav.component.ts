import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from 'src/app/core/models/page';
import { NavFacade } from './nav.facade';
import { NAVIGATION_ITEMS } from './navigation-items';

@Component({
  selector: 'bdc-bo-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() public isOpen!: boolean;
  protected pagesIterable = new Map<string, Page>(NAVIGATION_ITEMS);
  protected combinedPages$ = this.navFacade.selectCountAside(this.pagesIterable);

  constructor(private navFacade: NavFacade) {}

  ngOnInit(): void {
    this.navFacade.dispatchGetCountAside();
  }
}
