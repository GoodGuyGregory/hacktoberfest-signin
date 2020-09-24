import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() {

  }
  getUserAvatar() {
    return "returning username.urlAvatar";
  }
}
