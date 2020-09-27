import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LanguagesData {
  // Import User Data to component
  arg: string;
  Java: number;
  Python: number;
  Go: number;
  Cplusplus: number;
  Sql: number;

}

let languageData: LanguagesData[] = [{
  arg: "Python",
  Java: 1.0,
  Python: 1.0,
  Go: 1.0,
  Cplusplus: 1.0,
  Sql: 1.0,
}, {
  arg: "Java",
  Java: 2.0,
  Python: 3.0,
  Go: 3.0,
  Cplusplus: 5.0,
  Sql: 8.0,
}, {
  arg: "C++",
  Java: 4.0,
  Python: 2.0,
  Go: 3.0,
  Cplusplus: 7.0,
  Sql: 9.0,
}, {
  arg: "F #",
  Java: 4.0,
  Python: 2.0,
  Go: 3.0,
  Cplusplus: 7.0,
  Sql: 9.0,

},
{
  arg: "Ruby",
  Java: 4.0,
  Python: 2.0,
  Go: 3.0,
  Cplusplus: 7.0,
  Sql: 9.0,
}, {
  arg: "Swift",
  Java: 4.0,
  Python: 2.0,
  Go: 3.0,
  Cplusplus: 7.0,
  Sql: 9.0,
}, {
  arg: "Go",
  Java: 4.0,
  Python: 2.0,
  Go: 3.0,
  Cplusplus: 7.0,
  Sql: 9.0,
}, {
  arg: "Javascript",
  Java: 4.0,
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


