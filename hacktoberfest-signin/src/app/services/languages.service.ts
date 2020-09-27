import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LanguagesData {
  // Import User Data to component
  arg: string;
  java: number;
  Python: number;
  Go: number;
  Cplusplus: number;
  Sql: number;

}

let languageData: LanguagesData[] = [{
  arg: "Python",
  java: 1.0,
  Python: 1.0,
  Go: 1.0,
  Cplusplus: 1.0,
  Sql: 1.0,
}, {
  arg: "Java",
  java: 2.0,
  Python: 3.0,
  Go: 3.0,
  Cplusplus: 5.0,
  Sql: 8.0,
}, {
  arg: "C++",
  java: 4.0,
  Python: 2.0,
  Go: 3.0,
  Cplusplus: 7.0,
  Sql: 9.0,
}, {
  arg: "F #",
  java: 4.0,
  Python: 2.0,
  Go: 3.0,
  Cplusplus: 7.0,
  Sql: 9.0,

},
{
  arg: "Ruby",
  java: 4.0,
  Python: 2.0,
  Go: 3.0,
  Cplusplus: 7.0,
  Sql: 9.0,
}, {
  arg: "Swift",
  java: 4.0,
  Python: 2.0,
  Go: 3.0,
  Cplusplus: 7.0,
  Sql: 9.0,
}, {
  arg: "Go",
  java: 4.0,
  Python: 2.0,
  Go: 3.0,
  Cplusplus: 7.0,
  Sql: 9.0,
}, {
  arg: "Javascript",
  java: 4.0,
  Python: 2.0,
  Go: 3.0,
  Cplusplus: 7.0,
  Sql: 9.0,
}];

@Injectable()
export class LanguageService {
  getLanguageData(): LanguagesData[] {
    return languageData;
  }
}


