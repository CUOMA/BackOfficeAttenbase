import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionsService } from 'src/app/core/services/question.service';

@Component({
  selector: 'bdc-bo-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.scss'],
})
export class DetailQuestionComponent implements OnInit {
  protected path!: string;
  protected preview$!: Observable<any>
  constructor(public route: ActivatedRoute, private service: QuestionsService) { }
  ngOnInit(): void {
    this.path = this.route.snapshot.paramMap.get('path') || '';
    this.preview$ = this.service.showQuestions(this.path)

  }
} 
