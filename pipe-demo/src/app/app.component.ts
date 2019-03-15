import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-demo';

  d1 = new Date(1989, 2, 13);
  d2 = new Date(2018, 4, 17);
  emp: Employee = {
    firstName: "Manish", lastName: "Mansi",
    dob: this.d1,
    doj: this.d2,
    empId: 101,
    salary: 139668700
  };

}
