import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: FormGroup;
  @Input() text: string;
  @Input() id: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
