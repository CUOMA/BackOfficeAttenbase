import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { debounceTime } from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';
import { AlertService } from '../../../../../../core/services/alert.service';
import { CategoriesFacade } from '../../dashboard-categories.facade';
import { OnInit } from '@angular/core';

@Component({
  selector: 'bdc-bo-scroll-categories',
  templateUrl: './scroll-categories.component.html',
  styleUrls: ['./scroll-categories.component.scss'],
})
export class ScrollCategoriesComponent implements OnInit, AfterViewInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resize$.next(null);
  }
  @ViewChild('scrollElement') private childEl!: ElementRef;
  @Input() element!: Subcategories;
  protected items!: any;
  protected buttonRightDisable!: boolean;
  protected buttonLeftDisable!: boolean;
  private resize$ = new BehaviorSubject(null);

  constructor(private alertService: AlertService, private categoriesFacade: CategoriesFacade) {}

  public ngOnInit(): void {
    this.agruparItems(this.element);
    console.log(this.element)
  }

  ngAfterViewInit(): void {
    this.resize$.pipe(debounceTime(100)).subscribe({ next: () => this.calculateButtonsStatus() });
  }

  protected handleScroll(scrollType: 'right' | 'left' = 'left'): void {
    const rightScroll = 150;
    const leftScroll = -150;
    const scroll = scrollType === 'right' ? rightScroll : leftScroll;
    this.childEl.nativeElement.scrollLeft += scroll;
    this.calculateButtonsStatus();
  }

  protected agruparItems(element: any) {
    this.items = element.map((item: any) => ({ ...item, elementos: item.name }));
  }

  protected deleteItem(id: number, name: string): any {
    this.alertSynonimDeleted(name);
    // this.categoriesFacade
    //   .deleteCategories()
    //   .pipe(tap(() => this.alertSynonimDeleted()))
    //   .subscribe();
  }

  protected alertSynonimDeleted(element: string) {
    this.alertService.openFromComponent({
      duration: 5000,
      data: {
        templateHTML: `Eliminaste ${element}`,
      },
    });
  }
  private calculateButtonsStatus(): void {
    this.buttonLeftDisable = !this.childEl.nativeElement.scrollLeft;
    this.buttonRightDisable = !(
      this.childEl.nativeElement.scrollWidth -
      this.childEl.nativeElement.clientWidth -
      this.childEl.nativeElement.scrollLeft
    );
  }
}

export interface Subcategories {
  id: number;
  name: string;
  slug: string;
  parent_id: number;
  order: number;
  hidden: number;
  icon: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: any;
}
