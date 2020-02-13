import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();

  value = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
    this.onSubmit.emit(this.value);
  }
}
