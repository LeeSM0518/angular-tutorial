import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  count = 0;

  @Output() clickEvent = new EventEmitter();

  constructor() { }

  executeButton(commnad): void {
    this.clickEvent.emit(commnad);
  }

  ngOnInit(): void {
  }

}
