import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bdc-bo-dashboard',
  templateUrl: './dashboard-synonyms.component.html',
  styleUrls: ['./dashboard-synonyms.component.scss'],
})
export class DashboardSynonymsComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {
    console.log('Sinonimos');
  }
}
