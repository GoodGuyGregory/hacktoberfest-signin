import { Component, OnInit, NgModule, ɵALLOW_MULTIPLE_PLATFORMS } from '@angular/core';
import { User } from 'src/app/models/User';
import { Observable } from 'rxjs'
// Services:
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-languagesdata',
  templateUrl: './languagesdata.component.html',
  styleUrls: ['./languagesdata.component.scss'],
})

export class LanguagesdataComponent {
  languageData: User[];
  currentUsers: string[];

  constructor(private userService: UserService) {
    this.currentUsers;
  }

  ngOnInit(): void {
    // gets the user data from the subject
    this.getUserData();
    this.getUsernames();
  }

  // Collect Language Data args for DEVExtreme:
  getUserData() {
    this.userService.user$.subscribe(userData => {
      if (userData.length !== 0) {
        console.log("Testing Connection:")
        console.log('================');
        for (let i = 0; i < userData.length; i++) {
          console.log(userData[i].username);

        }

        console.log("Keys from the Users Object:");
        console.log("=============================");

        console.log(Object.keys(userData[1].languages));
        let usersLangData = Object.keys(userData[1].languages);
        console.log(" ");

        console.log("Creates an Array of Objects with each Language:");
        console.log("===============================================");
        let LanguageData = [];
        usersLangData.forEach(element => {
          // console.log("Getting Elements...");
          // console.log(element);
          let languageArgs = {};
          // console.log(`appending ${element} to their own object`);
          languageArgs["arg"] = element;
          console.log(JSON.stringify(languageArgs));
          LanguageData.push(languageArgs);
        })

        console.log(" ");
        // Checking contents of userLangData:
        console.log("Elements inside of LanguageData");
        console.log("=====================================");
        LanguageData.forEach(lang => {
          console.log(lang.arg);
        })

        console.log(" ");
        // Combine UserData where the arg matches the language preference:
        console.log("Combine User language values with args:");
        console.log("=========================================");


        userData.forEach(user => {
          for (let lang in user.languages) {
            for (let i = 0; i < LanguageData.length; i++) {
              if (lang == LanguageData[i].arg) {
                LanguageData[i][user.username] = user.languages[lang];
              }
            }
          }
        });
        console.log(" ");
        console.log("Contents of LanguageData:");
        console.log("============================");
        LanguageData.forEach(element => {
          console.log(element);
        });

        this.languageData = LanguageData;
      }
    })
  }

  getUsernames() {
    this.userService.user$.subscribe(userData => {
      if (userData.length !== 0) {
        console.log("Gathering Usernames:")
        console.log('================');
        for (let i = 0; i < userData.length; i++) {
          console.log(userData[i].username);
          this.currentUsers.push(userData[i].username);
        }
      }
    });
  }

}



