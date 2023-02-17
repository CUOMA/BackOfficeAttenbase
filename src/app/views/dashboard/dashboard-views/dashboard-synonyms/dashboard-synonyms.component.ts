import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';
import { AlertService } from '../../../../core/services/alert.service';
import { SynonymsFacade } from './dashboard-synonyms.facade';

@Component({
  selector: 'bdc-bo-dashboard-synonyms',
  templateUrl: './dashboard-synonyms.component.html',
  styleUrls: ['./dashboard-synonyms.component.scss'],
})
export class DashboardSynonymsComponent implements AfterViewInit {
  // propiedades del array que se van a renderizar por columna
  protected displayedColumns: string[] = ['position', 'name', 'seeMore'];

  ELEMENT_DATA: any[] = [
    {
      position: 'Problemas de Señal',
      name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
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
  // protected chips: string[] = this.ELEMENT_DATA.map(obj => obj.name);
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('scrollElement') private childEl!: ElementRef;

  constructor(
    private intl: MatPaginatorIntl,
    private alertService: AlertService,
    private synonymsFacade: SynonymsFacade
  ) {}

  avance(): void {
    this.childEl.nativeElement.scrollLeft += 150;

    console.log(this.childEl.nativeElement.scrollLeft);
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

  protected deleteItem(): any {
    this.synonymsFacade
      .deleteSynonim()
      .pipe(tap(() => this.alertSynonimDeleted()))
      .subscribe();
  }

  protected alertSynonimDeleted() {
    this.alertService.openFromComponent({
      duration: 50000,
      data: {
        templateHTML: `<p>Hola humano!</p> <div><i>Estamos a punto de invadirte :)</i></div>`,
      },
    });
  }
}
