import { Component } from '@angular/core';

export interface Product{
  productId:number;
  name:string;
  price:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mahendra Shinde';
  productList:Array<Product> = [
    {productId:101, name:"Colgate Total", price:48 }, 
    {productId:102, name:"Colgate Sensitive", price:78 }
  ];
}
