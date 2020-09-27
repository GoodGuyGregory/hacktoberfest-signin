import { Injectable, Injectable, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LanguagesData {
  // Import User Data to component
  user: string;
  Java: number;
  Python: number;
  Go: number;
  Cplusplus: number;
  Sql: number;

}

let languageData: LanguagesData[] = [{
  user: "GoodGuyGregory",
  Java: 1,
  Python: 1,
  Go: 1,
  Cplusplus: 1,
  Sql: 1,
}, {
  user: "SamuraiJack",
  Java: 2,
  Python: 3,
  Go: 3,
  Cplusplus: 5,
  Sql: 8,
}, {
  user: "Jake",
  Java: 4,
  Python: 2,
  Go: 3,
  Cplusplus: 7,
  Sql: 9,
}];

@Injectable()
export class LanguageService {
  getLanuageData(): LanguagesData[] {
    return languageData;
  }
}


