import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'

const keyup$ = fromEvent(document.getElementById("search"), "keyup")
    .pipe(
        map(e => e.target.value)
    );

keyup$.subscribe(v => console.log(v));