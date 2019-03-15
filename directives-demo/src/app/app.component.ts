import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'directives-demo';
  clsName: string;
  clsNames: Array<string>;

  ngOnInit() {
    this.clsName = 'style1';
    this.clsNames = ['style1', 'style2', 'style3'];
  }
}
