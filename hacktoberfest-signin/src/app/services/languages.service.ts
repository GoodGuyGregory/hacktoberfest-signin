import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})




export class LanguagesData {
  // Import User Data to component
  arg: string;
  // Pull Request Added Users:
  goodguygregory: number;

}


let languageData: LanguagesData[] = [{
  arg: "Python",
  goodguygregory: 5,

}, {
  arg: "Java",
  goodguygregory: 4
}, {
  arg: "C++",
  goodguygregory: 2,
}, {
  arg: "F#",
  goodguygregory: 1
},
{
  arg: "Ruby",
  goodguygregory: 3
}, {
  arg: "Swift",
  goodguygregory: 0
},
{
  arg: "Go",
  goodguygregory: 3
}, {
  arg: "Javascript",
  goodguygregory: 5
},
{
  arg: "C#",
  goodguygregory: 2
}];

@Injectable()
export class LanguageService {
  getLanguageData(): LanguagesData[] {
    return languageData;
  }
}


