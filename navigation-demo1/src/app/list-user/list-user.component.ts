import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEdit() {
    this.router.navigate(['edit-user']);
  }
  onDelete() {
    //TODO perform delete operation
  }
  onAdd() {
    this.router.navigate(['add-user']);
  }
}
