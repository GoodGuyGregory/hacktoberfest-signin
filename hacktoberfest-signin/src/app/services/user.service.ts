import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  currentUsers: User[];
  existingUsers: [];
  userDataUrl: string;

  private readonly usersubject: Subject<User[]>
  public readonly user$: Observable<User[]>

  // TODO: HTTPservices for JSON

  constructor(private http: HttpClient) {
    this.currentUsers = [];
    this.existingUsers;
    this.userDataUrl = '../../assets/data/users.json';

    // stores inside the service to add new data
    // this.usersubject = new Subject<User[]>()

    // this.user$ = this.usersubject.asObservable();
  }

  // GET request from the JSON data
  //  and new users recently added
  getUsers(): Observable<User[]> {
    // Connects to Local hosted data
    // returns the data hosted inside of the json
    return this.http.get<User[]>(this.userDataUrl);

  }

  createUsers(user: User): void {
    // gets all of the user data hosted locally and adds it to the array 
    this.getUsers().subscribe((data) => {
      console.log(JSON.stringify(data));
      this.currentUsers = data

      // creates a new User from the input provided
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
      console.log("Subscribe: ")
      console.log(JSON.stringify(this.currentUsers));
      // return `added ${user.username} to currentUsers array of size ${this.currentUsers.length}`;
    });
  }

  // getLanguageData: 
  // Returns the elements inside of the currentUsers[] for languagesData Component 
  getLanguageData(): Array<User> {
    // Parses the Array in order to pass the data elements needed in a format
    // similar to the languages service data.
    return this.currentUsers;
  }
}
