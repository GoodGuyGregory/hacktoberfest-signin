import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user: User;

  constructor(private githubservice: GithubService) { }

  // toggle for searchUser div
  searchUser: boolean = true;
  // toggle for finding the User
  foundUser: boolean = false;
  username: string;

  ngOnInit(): void {
  }

  findUser(data) {
    this.searchUser = !this.searchUser;
    // TODO Confirm User Name Matches String Sent from databinding

    this.username = data.username;
    this.foundUser = true;


  }

}
