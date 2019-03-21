import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  form1:NgForm;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe(params => {
      let id = +params.id;
      this.user = this.userService.findUserById(id);
      console.log("Found user " + this.user.firstName);
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.userService.update(this.user);
    this.router.navigate(['list-users']);
  }
}
