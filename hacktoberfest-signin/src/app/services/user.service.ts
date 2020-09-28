import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  currentUsers: User[];


  // TODO: HTTPservices for JSON

  constructor() {
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
    this.currentUsers.push(newUser);
    return `added ${user.username} to currentUsers`;
  }



}
