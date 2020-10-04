import { Component, OnInit, NgModule } from '@angular/core';
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
  public languageData$: Observable<User[]>;

  constructor(private userService: UserService) {
    this.languageData$ = this.userService.user$;

  }

  ngOnInit(): void {
    // Generate the Users data for the component to load
    // check new users etc.
    // this.languageData = this.userService.getLanguageData();

  }
}



