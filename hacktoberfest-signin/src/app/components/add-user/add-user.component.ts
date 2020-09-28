import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { User } from '../../models/User';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private githubService: GithubService) { }
  // Creates instance of a user object
  user: User;

  // toggle for searchUser div
  searchUser: boolean = true;
  // toggle for finding the User
  foundUser: boolean = false;
  // toggle the questions section
  questionUser: boolean = false;

  username: string;
  heroimage: string;

  ngOnInit(): void {
  }

  findUser(data) {
    this.searchUser = !this.searchUser;
    // TODO Confirm User Name Matches String Sent from databinding

    this.username = data.username;
    this.foundUser = true;
    this.githubService.getUserAvatar(this.username).subscribe(userData => {
      let user = JSON.parse(JSON.stringify(userData));
      console.log(user);
      this.heroimage = user.avatar_url;
    });
  }

  searchAgain() {
    this.searchUser = true;
    this.foundUser = false;
  }

  setUserName() {
    this.user = {
      id: 1,
      heroimage: this.heroimage,
      username: this.username,
      language: {
        python: 0,
        java: 0,
        "c++": 0,
        "f#": 0,
        ruby: 0,
        swift: 0,
        go: 0,
        javascript: 0,
        "c#": 0,
      }
    }
    // show the next form element
    this.questionUser = true;
    this.searchUser = false;
    this.foundUser = false;
  }
}
