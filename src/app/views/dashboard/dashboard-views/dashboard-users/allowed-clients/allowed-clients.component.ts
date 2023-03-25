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
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'bdc-bo-allowed-clients',
  templateUrl: './allowed-clients.component.html',
  styleUrls: ['./allowed-clients.component.scss'],
})
export class AllowedClientsComponent implements AfterViewInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resize$.next(null);
  }
  @ViewChild('scrollElement') private childEl!: ElementRef;
  @Input() public element!: any;
  protected buttonRightDisable!: boolean;
  protected buttonLeftDisable!: boolean;
  private resize$ = new BehaviorSubject(null);

  constructor(private alertService: AlertService) {}

  ngAfterViewInit(): void {
    this.resize$.pipe(debounceTime(100)).subscribe({ next: () => this.calculateButtonsStatus() });
  }

  protected deleteItem() {
    alert('se dehabilitara un cliente');
  }

  protected handleScroll(scrollType: 'right' | 'left' = 'left'): void {
    const rightScroll = 150;
    const leftScroll = -150;
    const scroll = scrollType === 'right' ? rightScroll : leftScroll;

    this.childEl.nativeElement.scrollLeft += scroll;
    this.calculateButtonsStatus();
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
