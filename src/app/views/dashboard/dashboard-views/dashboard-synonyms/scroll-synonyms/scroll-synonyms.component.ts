import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AlertService } from '../../../../../core/services/alert.service';
import { SynonymsFacade } from '../dashboard-synonyms.facade';

@Component({
  selector: 'bdc-bo-scroll-synonyms',
  templateUrl: './scroll-synonyms.component.html',
  styleUrls: ['./scroll-synonyms.component.scss'],
})
export class ScrollSynonymsComponent implements AfterViewInit {
  @ViewChild('scrollElement') private childEl!: ElementRef;
  @Input() public element!: any;
  protected buttonRightDisable!: boolean;
  protected buttonLeftDisable!: boolean;
  constructor(private alertService: AlertService, private synonymsFacade: SynonymsFacade) {}
  ngAfterViewInit(): void {
    this.buttonRightDisable = this.childEl.nativeElement.scrollWidth > 600 ?? false;
    this.buttonLeftDisable = this.childEl.nativeElement.scrollLeft === 0 ?? true;
  }
  protected scrollToLeft(): void {
    this.childEl.nativeElement.scrollLeft -= 150;
    this.buttonRightDisable = this.childEl.nativeElement.scrollWidth > 600 ?? false;
    this.buttonLeftDisable = this.childEl.nativeElement.scrollLeft === 0 ?? true;
  }

  protected scrollToRight(): void {
    this.childEl.nativeElement.scrollLeft += 150;
    this.buttonLeftDisable = this.childEl.nativeElement.scrollLeft === 0 ?? true;
  }

  protected deleteItem(): any {
    this.synonymsFacade
      .deleteSynonim()
      .pipe(tap(() => this.alertSynonimDeleted()))
      .subscribe();
  }

  protected alertSynonimDeleted() {
    this.alertService.openFromComponent({
      duration: 5000,
      data: {
        templateHTML: `<p>Hola humano!</p> <div><i>Estamos a punto de invadirte :)</i></div>`,
      },
    });
  }
}
