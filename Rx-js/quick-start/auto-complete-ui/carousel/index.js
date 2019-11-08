import { fromEvent } from 'rxjs';
import { map, switchMap, takeUntil, first } from 'rxjs/operators';

// Declares
const $view = document.getElementById("carousel");
const $container = $view.querySelector(".container");
const PANEL_COUNT = $container.querySelectorAll(".panel").length;
const SUPPORT_TOUCH = "ontouchstart" in window;
const EVENTS = {
    start: SUPPORT_TOUCH ? "touchstart" : "mousedown",
    move: SUPPORT_TOUCH ? "touchmove" : "mousemove",
    end: SUPPORT_TOUCH ? "touchend" : "mouseup"
};

function toPos(obs$) {
    return obs$.pipe(
        map(v => SUPPORT_TOUCH ? v.changedTouches[0].pageX : v.pageX)
    );
}

// Observables
const start$ = fromEvent($view, EVENTS.start).pipe(toPos);
const move$ = fromEvent($view, EVENTS.move).pipe(toPos);
const end$ = fromEvent($view, EVENTS.end);

const drag$ = start$.pipe(
    switchMap(start => {
        return move$.pipe(
            map(move => move - start),
            takeUntil(end$)
        );
    })
);

const drop$ = drag$.pipe(
    switchMap(drag => end$.pipe(first())),
);

drag$.subscribe(e => console.log('drag', e))
drop$.subscribe(e => console.log('drop$', e))