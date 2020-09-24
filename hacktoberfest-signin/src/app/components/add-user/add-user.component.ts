import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  // toggle for searchUser div
  searchUser = true;
  // toggle for finding the User
  foundUser = false;

  ngOnInit(): void {
  }

  findUser() {
    this.searchUser = !this.searchUser;


  }

}
