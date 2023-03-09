import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService } from '../../../../core/services/alert.service';
import { CategoriesFacade } from './dashboard-categories.facade';
import { observable, Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'bdc-bo-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.scss'],
})
export class DashboardCategoriesComponent implements AfterViewInit, OnInit {
  protected displayedColumns: string[] = ['position', 'name', 'seeMore'];
  ELEMENT_DATA: any[] = [
    {
      position: 'Problemas de Señal',
      name: [
        'Problemas de señal',
        'No funciona',
        'Rooming',
        'Problemas con el teléfono',
        'No hay señal',
      ],
    },
    {
      position: '*444',
      name: [
        'Problemas de señal',
        'Problemas con el teléfono',
        'No hay señal',
        'Celular',
        'No funciona',
      ],
    },
    { position: '*555', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    { position: '*611', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    {
      position: '*Activar',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    { position: '*2x1', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    {
      position: 'Actualización',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    {
      position: '*Problemas de Señal',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    {
      position: '*Problemas de Señal',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    { position: '*911', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    {
      position: 'Error',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    {
      position: 'Problemas de Señal',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    { position: '*444', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    { position: '*555', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    { position: '*611', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    {
      position: '*Activar',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    { position: '*2x1', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    {
      position: 'Actualización',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    {
      position: '*Problemas de Señal',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    {
      position: '*Problemas de Señal',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    { position: '*911', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    {
      position: 'Error',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    {
      position: 'Problemas de Señal',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    { position: '*444', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    { position: '*555', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    { position: '*611', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    {
      position: '*Activar',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    { position: '*2x1', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    {
      position: 'Actualización',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    {
      position: '*Problemas de Señal',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    {
      position: '*Problemas de Señal',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
    { position: '*911', name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'] },
    {
      position: 'Error',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
    },
  ];
  protected showFirstLastButtons: boolean = true;
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected length: number = this.ELEMENT_DATA.length;
  protected pageSize: number = 10;
  protected openMenu: boolean = false;
  protected areCategoriesLoading$!: Observable<any>;
  private destroy$ = new Subject<void>();

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private intl: MatPaginatorIntl,
    private alertService: AlertService,
    private categoriesFacade: CategoriesFacade
  ) {}

  ngOnInit(): void {
    this.areCategoriesLoading$ = this.categoriesFacade.areCategoriesLoading.pipe(
      tap(console.log),
      takeUntil(this.destroy$)
    );
    this.areCategoriesLoading$.subscribe();

    this.categoriesFacade.getCategories();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const numberPages = Math.ceil(length / pageSize);
      const startIndex = page;
      return `Página ${startIndex + 1} de ${numberPages}`;
    };
    this.intl.previousPageLabel = 'Página anterior';
    this.intl.nextPageLabel = 'Página siguiente';
  }
}
