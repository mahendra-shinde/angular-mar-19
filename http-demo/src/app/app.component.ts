import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-demo';
  data: any;

  constructor(private http: HttpClient) { }

  makeRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
      });
  }
}
