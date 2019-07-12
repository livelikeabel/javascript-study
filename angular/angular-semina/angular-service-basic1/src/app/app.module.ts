import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // useClass. 이름을 바꿀 수 있음
    {
      provide: 'log',
      useClass: LogService
    },
    // useValue. value를 주입.
    {
      provide: 'apiUrl',
      useValue: 'https://api.github.com/users'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
