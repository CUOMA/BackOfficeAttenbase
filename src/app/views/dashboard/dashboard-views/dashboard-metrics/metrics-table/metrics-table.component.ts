import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'bdc-bo-metrics-table',
  templateUrl: './metrics-table.component.html',
  styleUrls: ['./metrics-table.component.scss'],
})
export class MetricsTableComponent implements OnInit {
  protected questions = [
    {
      name: '¿Dónde obtengo el número de serie del antivirus?',
      published_at: '2019-12-19 08:30:10',
      status: {
        name: 'publicada',
        class: 'PUBLISHED',
      },
    },
    {
      name: '¿Cómo comprar mi chip?',
      published_at: '2022-12-12 22:47:51',
      status: {
        name: 'programada',
        class: 'SCHEDULED',
      },
    },
    {
      name: '¿Dónde obtengo el número de serie del antivirus?',
      published_at: '2019-12-19 09:30:19',
      status: {
        name: 'archivada',
        class: 'ARCHIVED',
      },
    },
    {
      name: '¿Dónde obtengo el número de serie del antivirus?',
      published_at: '2019-12-19 10:00:21',
      status: {
        name: 'publicada',
        class: 'PUBLISHED',
      },
    },
    {
      name: '¿Dónde obtengo el número de serie del antivirus?',
      published_at: '2019-12-19 22:30:10',
      status: {
        name: 'archivada',
        class: 'ARCHIVED',
      },
    },
  ];
  dataSource: any;
  protected displayedColumns: string[] = ['article', 'modification', 'state'];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.questions);
  }
}
