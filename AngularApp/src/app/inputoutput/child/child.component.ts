import { Component, OnInit, Output, Input,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() private message = new EventEmitter();
  @Input() parentMessage: any;
  name: any;
  constructor() { }
  ngOnInit() {
  }
  sendMessage() {
    const obj = {
      message: this.name
    };
    this.message.emit(obj);
  }

}
