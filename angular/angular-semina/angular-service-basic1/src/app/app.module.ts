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
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
