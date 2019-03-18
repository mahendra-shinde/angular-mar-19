import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form1';
  constructor(fb: FormBuilder) {
    this.formControl = fb.group({
      'productName': ['', Validators.required],
      'productPrice': ['10', [Validators.min(10),
      Validators.max(1000)]]
    });
  }
  ngOnInit() {
  }

  formControl: FormGroup;
  productName: String;
  productPrice: number;

  onSubmit() {
    console.log("Invoking submit!");
    if (this.formControl.invalid) {
      console.log("Form is Invalid!");
      return false;
    }
    console.log("Form submitted successfuly!");
    console.log("Values are : " + this.productName + " " + this.productPrice);
  }
}
