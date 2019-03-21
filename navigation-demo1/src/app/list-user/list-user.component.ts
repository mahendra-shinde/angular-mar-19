import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  userlist: Array<User>;
  constructor(private router: Router, private userService: UserService) {
    this.userlist = this.userService.loadAll();

  }

  ngOnInit() {
  }

  onEdit(id: number) {
    console.log("Editing ID " + id);
    this.router.navigate(['edit-user/'+id]);
  }
  onDelete() {
    //TODO perform delete operation
  }
  onAdd() {
    this.router.navigate(['add-user']);
  }
}
