import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test.component";
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';

@NgModule({
  declarations: [AppComponent, TestComponent, Sample1Component, Sample2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
