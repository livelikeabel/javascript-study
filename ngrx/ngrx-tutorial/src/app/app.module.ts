import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ScoreboardModule } from './scoreboard.module';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

import { MovieEffects } from './movie.effects';


@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([MovieEffects]),
    ScoreboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
