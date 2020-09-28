import { Component, OnInit, NgModule } from '@angular/core';

// Services
import { LanguagesData, LanguageService } from '../../services/languages.service';

@Component({
  selector: 'app-languagesdata',
  templateUrl: './languagesdata.component.html',
  styleUrls: ['./languagesdata.component.scss'],
  providers: [LanguageService]
})

export class LanguagesdataComponent implements OnInit {
  // gets service data
  languageData: LanguagesData[];

  constructor(private languageService: LanguageService) {
    // set service data
    this.languageData = languageService.getLanguageData();
  }

  ngOnInit(): void {

  }

}



