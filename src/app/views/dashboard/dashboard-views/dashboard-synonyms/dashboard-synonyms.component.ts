import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService } from '../../../../core/services/alert.service';
import { SynonymsFacade } from './dashboard-synonyms.facade';

@Component({
  selector: 'bdc-bo-dashboard-synonyms',
  templateUrl: './dashboard-synonyms.component.html',
  styleUrls: ['./dashboard-synonyms.component.scss'],
})
export class DashboardSynonymsComponent implements OnInit, AfterViewInit {
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

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private alertService: AlertService, private synonymsFacade: SynonymsFacade) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.synonymsFacade.dispatchGetSynonyms();
  }
}
