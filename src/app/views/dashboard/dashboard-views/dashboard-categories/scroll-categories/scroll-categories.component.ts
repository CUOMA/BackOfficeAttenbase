import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  HostListener,
} from '@angular/core';
import { debounceTime, tap, distinctUntilChanged } from 'rxjs/operators';
import { AlertService } from '../../../../../core/services/alert.service';
import { CategoriesFacade } from '../dashboard-categories.facade';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'bdc-bo-scroll-categories',
  templateUrl: './scroll-categories.component.html',
  styleUrls: ['./scroll-categories.component.scss'],
})
export class ScrollCategoriesComponent implements AfterViewInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resize$.next(null);
  }
  @ViewChild('scrollElement') private childEl!: ElementRef;
  @Input() public element!: any;
  protected buttonRightDisable!: boolean;
  protected buttonLeftDisable!: boolean;
  private resize$ = new BehaviorSubject(null);
  item = 'hola';

  constructor(private alertService: AlertService, private categoriesFacade: CategoriesFacade) {}

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

  protected deleteItem(): any {
    this.categoriesFacade
      .deleteCategories()
      .pipe(tap(() => this.alertSynonimDeleted()))
      .subscribe();
  }

  protected alertSynonimDeleted() {
    this.alertService.openFromComponent({
      duration: 5000,
      data: {
        templateHTML: `Eliminaste Item`,
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
