import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input.output',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  recievedMassage: any;
  data: any;
  message: any;
  constructor() { }

  ngOnInit() {
  }
  recieveMessage(message: any) {
    console.log(message);
    this.recievedMassage = message;
  }
  send(data) {
    this.message = data;
  }
}
