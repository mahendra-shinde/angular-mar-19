import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: Array<User> = [{ firstName: "Jeetendra", lastName: "Kapoor", id: 1, age: 72 },
  { firstName: "Dharmendra", lastName: "Deol", id: 2, age: 84 }];

  constructor() {
    console.log("Populating sample users");
  }

  ngOnInit() {

  }

  findUserById(id: number) {
    return this.userList.filter(u => u.id == id)[0];
  }

  update(usr: User) {
    let temp: User = this.findUserById(usr.id);
    if (temp) {
      temp.firstName = usr.firstName;
      temp.lastName = usr.lastName;
      temp.age = usr.age;
    } else {
      console.log("User not found!");
    }
  }

  remove(id: number) {
    this.userList = this.userList.filter(u => u.id != id);
  }

  save(usr: User) {
    this.userList.push(usr);
  }

  loadAll() {
    return this.userList;
  }
}
