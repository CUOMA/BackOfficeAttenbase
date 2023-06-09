import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bdc-bo-dashboard-metrics',
  templateUrl: './dashboard-metrics.component.html',
  styleUrls: ['./dashboard-metrics.component.scss'],
})
export class DashboardMetricsComponent {
  protected filterTime = [
    { key: '7 días', value: '7 dias' },
    { key: '1 mes', value: '1 mes' },
    { key: '6 meses', value: '6 meses' },
    { key: '12 meses', value: '12 meses' },
  ];
  constructor() {}
}
