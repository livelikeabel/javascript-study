import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from './movies.service';

@Injectable()
export class MovieEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[Movies Page] Load Movies'),
        mergeMap(() => this.moviesService.getAll()
            .pipe(
                map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
                catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
            ))
    ));

    constructor(
        private action$: Actions,
        private moviesService: MoviesService
    ) { }
}