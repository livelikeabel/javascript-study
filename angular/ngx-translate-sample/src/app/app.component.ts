import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'ngx-translate-sample';
  private translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  public ngOnInit(): void {
    this.translate.setDefaultLang('en');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
