import { fromEvent, from } from 'rxjs';
import { map } from 'rxjs/operators'

const keyup$ = fromEvent(document.getElementById("search"), "keyup")
    .pipe(
        map(e => e.target.value)
    );

keyup$.subscribe(v => console.log(v));

const request$ = from(fetch("https://api.github.com/search/users?q=sculove")
    .then(res => res.json()));

request$.subscribe(json => {
    console.log(json)
})