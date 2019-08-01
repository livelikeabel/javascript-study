import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    template: `
        <div>
            {{ movie.name }}
        </div>
    `
})
export class MoviesPageComponent {
    movies$: Observable = this.store.select(state => state.movies);

    constructor(private store: Store<{ movies: Movie[]}>) {}

    ngOnInit() {
        this.store.dispatch({type: '[Movies Page] Load Movies'});
    }
}