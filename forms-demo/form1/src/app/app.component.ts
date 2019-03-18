import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'form1';

  constructor(fb: FormBuilder) {
    this.formControl = fb.group({
      'productName': ['', Validators.required]
    });
  }

  ngOnInit(){
  }

  formControl: FormGroup;
  productName: String;
}
