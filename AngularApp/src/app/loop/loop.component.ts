import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {
  filter: any = {};
  names: any = [
    {'firstname': 'Santosh', 'middlename': 'Ramkrishna', 'lastname': 'Shinde'},
    {'firstname': 'Pradip', 'middlename': 'Prabhakar', 'lastname': 'Dabhade'},
    {'firstname': 'Suraj', 'middlename': 'Prakash', 'lastname': 'Auti'},
    {'firstname': 'Uttam', 'middlename': 'Shankar', 'lastname': 'Dangat'},
    {'firstname': 'Yogesh', 'middlename': 'Anil', 'lastname': 'Date'},
    {'firstname': 'Mobin', 'middlename': 'Kasam', 'lastname': 'Sayyad'},
    {'firstname': 'Prashant', 'middlename': 'Vikas', 'lastname': 'Thorat'},
    {'firstname': 'Vikas', 'middlename': 'Nivritti', 'lastname': 'Bhujbal'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
