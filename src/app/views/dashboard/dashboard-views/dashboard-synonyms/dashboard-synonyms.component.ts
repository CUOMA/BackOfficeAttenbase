import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService } from '../../../../core/services/alert.service';
import { SynonymsFacade } from './dashboard-synonyms.facade';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectSynonyms } from '../../../../store/selectors/synonyms.selectors';

@Component({
  selector: 'bdc-bo-dashboard-synonyms',
  templateUrl: './dashboard-synonyms.component.html',
  styleUrls: ['./dashboard-synonyms.component.scss'],
})
export class DashboardSynonymsComponent implements OnInit, AfterViewInit {
  protected displayedColumns: string[] = ['position', 'name', 'seeMore'];
  protected showFirstLastButtons: boolean = true;
  protected synonyms$ = this.synonymsFacade.selectSynonyms();
  protected areSynonymsLoading$!: Observable<boolean>;
  private destroy$ = new Subject<void>();
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected length: number = 10;
  protected pageSize: number = 10;
  protected openMenu: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  protected dataSource!: MatTableDataSource<any>;

  constructor(private alertService: AlertService, private synonymsFacade: SynonymsFacade) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = this.pageSize;
  }
  ngOnInit(): void {
    this.synonymsFacade.dispatchGetSynonyms();
  }
}
