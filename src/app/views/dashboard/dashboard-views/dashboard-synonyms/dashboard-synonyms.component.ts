import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService } from '../../../../core/services/alert.service';
import { SynonymousFacade } from './dashboard-synonymous.facade';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectSynonyms } from '../../../../store/selectors/synonyms.selectors';

@Component({
  selector: 'bdc-bo-dashboard-synonyms',
  templateUrl: './dashboard-synonyms.component.html',
  styleUrls: ['./dashboard-synonyms.component.scss'],
})
export class DashboardSynonymsComponent implements OnInit {
  protected showFirstLastButtons: boolean = true;
  protected synonyms$ = this.synonymsFacade.selectSynonyms();
  protected areSynonymsLoading$!: Observable<boolean>;
  private destroy$ = new Subject<void>();
  protected disabled: boolean = false;
  protected openMenu: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  protected dataSource!: MatTableDataSource<any>;

  constructor(private synonymsFacade: SynonymousFacade) {}

  ngOnInit(): void {
    this.synonymsFacade.dispatchGetSynonyms(1);
  }
  protected handlePageChanged(pageEvent: any): void {
    this.synonymsFacade.dispatchGetSynonyms(pageEvent.pageIndex + 1);
  }
}
