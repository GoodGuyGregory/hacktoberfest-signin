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


  private readonly usersubject: Subject<User[]>
  public readonly user$: Observable<User[]>

  // TODO: HTTPservices for JSON

  constructor(private http: HttpClient) {
    this.currentUsers = [];
    this.existingUsers;
    // stores inside the service to add new data
    this.usersubject = new Subject<User[]>()

    this.user$ = this.usersubject.asObservable();
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
    return `added ${user.username} to currentUsers array of size ${this.currentUsers.length}`;
  }


  // GET request from the JSON data
  //  and new users recently added
  getUsers(): void {
    // Connects to Local hosted data
    this.http.get('../../assets/users.json').subscribe(data => {
      console.log(data);
      this.usersubject.next(data as User[]);
    });
  }



  // getLanguageData: 
  // Returns the elements inside of the currentUsers[] for languagesData Component 
  getLanguageData(): Array<User> {
    return this.currentUsers;
  }
}
