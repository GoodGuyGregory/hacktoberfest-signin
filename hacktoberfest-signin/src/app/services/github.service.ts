import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() {

  }

  getUserAvatar() {
    let userResult = '';
    userResult = "https://i1.wp.com/www.comicon.com/wp-content/uploads/2020/03/image.jpg?fit=1200%2C665";
    return userResult;

  }
}
