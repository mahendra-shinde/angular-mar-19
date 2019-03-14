import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './app.person.component.html',
  styleUrls: ['./app.person.component.css']
})
export class PersonComponent implements OnInit {

  fname: string = "Barak";
  lname: string = "Obama";

  constructor() { }

  ngOnInit() {
  }

}
