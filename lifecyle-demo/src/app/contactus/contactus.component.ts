import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contact: string;
  ctype: string;

  constructor(private rout: ActivatedRoute) {
    rout.params.subscribe(params => { this.ctype = params['ctype'] })
    console.log("Received parameter: " + this.ctype);
  }

  ngOnInit() { }

  ngDoCheck() {
    switch (this.ctype) {
      case "phone":
        this.contact = "9988998811";
        break;
      case "mail":
        this.contact = "dummy@dummyco.in";
        break;
      default:
        this.contact = "Please specify contact type!";
    }
  }

}
