import { Component, OnInit, NgModule } from '@angular/core';
import { User } from 'src/app/models/User';
// Services:
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-languagesdata',
  templateUrl: './languagesdata.component.html',
  styleUrls: ['./languagesdata.component.scss'],
  providers: [UserService]
})

export class LanguagesdataComponent implements OnInit {
  // gets service data
  languageData: User[];

  constructor(private userService: UserService) {
    // set service data
    this.languageData
  }

  ngOnInit(): void {
    // Generate the Users data for the component to load
    this.languageData = this.userService.getLanguageData();
  }

}



