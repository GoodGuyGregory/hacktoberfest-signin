import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  currentUsers: User[];
  userDataUrl: string;

  private usersubject: BehaviorSubject<User[]>;
  public user$: Observable<User[]>;

  // TODO: HTTPservices for JSON

  constructor(private http: HttpClient) {
    this.currentUsers = [];
    this.userDataUrl = './assets/data/users.json';

    // Stores data and can emit submission data to subscribers of the subject
    this.usersubject = new BehaviorSubject<User[]>(this.currentUsers as User[]);

    // makes the subject and observable 
    this.user$ = this.usersubject.asObservable();

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
      // console.log(JSON.stringify(this.currentUsers));
      console.log(`added ${user.username} to currentUsers array of size ${this.currentUsers.length}`);
      this.getLanguageData(this.currentUsers);
    });
  }

  // getLanguageData: 
  // Returns the elements inside of the currentUsers[] for languagesData Component 
  getLanguageData(currentUsers: User[]) {
    this.usersubject.next(currentUsers);
  }
}
