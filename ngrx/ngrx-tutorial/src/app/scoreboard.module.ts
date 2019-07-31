import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromScoreboard from './scoreboard.reducer';


@NgModule({
    imports: [
        StoreModule.forFeature('game', fromScoreboard.reducer)
    ],
})
export class ScoreboardModule { }
