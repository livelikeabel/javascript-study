import { fromEvent, from } from 'rxjs';
import { map, mergeAll, mergeMap, debounceTime, filter, distinctUntilChanged } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

const user$ = fromEvent(document.getElementById("search"), "keyup")
    .pipe(
        debounceTime(300),
        map(e => e.target.value),
        distinctUntilChanged(),
        filter(query => query.trim().length > 0),
        mergeMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`))
    );

user$.subscribe(v => console.log(v));