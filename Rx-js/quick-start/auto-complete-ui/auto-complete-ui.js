import { fromEvent, from } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

const user$ = fromEvent(document.getElementById("search"), "keyup")
    .pipe(
        map(e => e.target.value),
        mergeMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`))
    );

user$.subscribe(v => console.log(v));