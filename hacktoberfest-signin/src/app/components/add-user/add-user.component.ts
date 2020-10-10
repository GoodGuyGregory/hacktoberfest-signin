import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private githubService: GithubService, private userService: UserService) { }
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
      // console.log(`Found ${user.username} user!`);
      // console.log(user);
      this.heroimage = user.avatar_url;
    });
  }

  searchAgain() {
    this.searchUser = true;
    this.foundUser = false;
  }

  setUserName() {
    this.user = {
      heroimage: this.heroimage,
      username: this.username,
      languages: {
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

  // Language Data from Users
  setUserPythonLanguageRating(entry): void {
    this.user.languages.python = entry;
    // console.log(this.user);
  }

  setUserJavaLanguageRating(entry): void {
    this.user.languages.java = entry;
    // console.log(this.user);
  }

  setUserCplusplusLanguageRating(entry): void {
    this.user.languages["c++"] = entry;
    // console.log(this.user);
  }

  setUserFsharpLanguageRating(entry): void {
    this.user.languages["f#"] = entry;
    // console.log(this.user);
  }

  setUserRubyLanguageRating(entry): void {
    this.user.languages.ruby = entry;
    // console.log(this.user);
  }

  setUserSwiftLanguageRating(entry): void {
    this.user.languages.swift = entry;
    // console.log(this.user);
  }

  setUserGoLanguageRating(entry): void {
    this.user.languages.go = entry;
    // console.log(this.user);
  }

  setUserJavascriptLanguageRating(entry): void {
    this.user.languages.javascript = entry;
    // console.log(this.user);
  }

  setUserCsharpLanguageRating(entry): void {
    this.user.languages["c#"] = entry;
    // console.log(this.user);
  }

  pushToService() {
    // console.log(JSON.stringify(this.user));
    // Pushed User to CurrentUsers Array
    console.log(`Pushing ${JSON.stringify(this.user)} to the currentUsers Array`);
    this.userService.createUsers(this.user);
  }

}
