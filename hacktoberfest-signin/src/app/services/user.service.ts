import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  currentUsers: User[];
  userDataUrl: string = '../assets/users.json';


  // TODO: HTTPservices for JSON

  constructor(private http: HttpClient) {
    this.currentUsers = [];
  }

  createUser(user: User): string {
    let newUser: User = {
      heroimage: user.heroimage,
      username: user.username,
      languages: {
        "python": user.languages.python,
        "java": user.languages.java,
        "c++": user.languages["c++"],
        "f#": user.languages["f#"],
        "ruby": user.languages.ruby,
        "swift": user.languages.swift,
        "go": user.languages.go,
        "javascript": user.languages.javascript,
        "c#": user.languages["c#"],

      }

    }
    // Pushes the user to the array of existing users
    this.currentUsers.push(newUser);
    return `added ${user.username} to currentUsers ${this.currentUsers.length}`;
  }


  // GET request from the JSON data
  //  and new users recently added
  getUsers(): void {
    // Connects to Local hosted data
    let existingUsers = this.http.get(this.userDataUrl).subscribe(userData => {
      let users = JSON.parse(JSON.stringify(userData));
      console.log(users);
      console.log(existingUsers);

      // Push ExistingUsers to the currentUsers[]
    });
  }

  // getLanguageData: 
  // Returns the elements inside of the currentUsers[] for languagesData Component 
  getLanguageData(): Array<User> {
    return this.currentUsers;
  }
}
