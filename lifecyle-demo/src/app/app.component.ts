import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecyle-demo';

//all lifecyle callback methods, start with "ng"
//And they do NOT accept any arguments
  ngOnInit(){
    console.log("Component initialized!")
  }

  ngOnChanges(){
    console.log("Component changes!")
  }

  ngOnDestroy(){
    console.log("Component prepare to destroy!")
  }
  ngDoCheck(){
    console.log("Component check!")
  }
}
