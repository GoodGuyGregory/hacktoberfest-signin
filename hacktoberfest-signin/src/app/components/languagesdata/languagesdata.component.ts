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
  // gets service data
  languageData: Object[];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    // Generate combined user data of all users in the JSON and the new incoming user into the app
    this.userService.user$.subscribe(userData => {
      let holderArray = userData as Object[];

      // sets array of languagedata
      this.languageData = holderArray;

    });

  }
}



