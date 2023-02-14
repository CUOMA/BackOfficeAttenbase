import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'bdc-bo-dashboard',
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

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private intl: MatPaginatorIntl) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina';
    this.intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const numberPages = Math.ceil(length / pageSize);
      const startIndex = page;
      return `Página ${startIndex + 1} de ${numberPages}`;
    };
  }
}
