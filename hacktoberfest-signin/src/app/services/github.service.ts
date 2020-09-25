import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  githubUrl: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {

  }

  getUserAvatar(username: string): Observable<any> {
    let userRequested = username.toLowerCase();
    this.githubUrl += `${userRequested}`;
    let userData = this.http.get(this.githubUrl)
    return userData;
  }
}
