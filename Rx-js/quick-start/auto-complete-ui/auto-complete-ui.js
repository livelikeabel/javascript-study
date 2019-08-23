import { fromEvent, from } from 'rxjs';
import { tap, map, mergeAll, mergeMap, debounceTime, filter, distinctUntilChanged, partition } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

const $layer = document.getElementById("suggestLayer");
const $loading = document.getElementById("loading");

function drawLayer(items) {
    $layer.innerHTML = items.map(user => {
        return `<li class="user">
        <img src="${user.avatar_url}" width="50px" height="50px" />
        <p><a href="${user.html_url}" target="_blank">${user.login}</a></p>
        </li>`
    }).join("");
}

function showLoading() {
    $loading.style.display = "block";
}

function hideLoading() {
    $loading.style.display = "none";
}

const keyup$ = fromEvent(document.getElementById("search"), "keyup")
    .pipe(
        debounceTime(300),
        map(e => e.target.value),
        distinctUntilChanged(),
    )

let [user$, reset$] = keyup$
    .pipe(
        partition(query => query.trim().length > 0)
    )

user$ = keyup$
    .pipe(
        tap(showLoading),
        mergeMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`)),
        tap(hideLoading)
    );

reset$ = keyup$
    .pipe(
        tap(v => $layer.innerHTML = "")
    )
    .subscribe();

user$.subscribe(v => {
    drawLayer(v.items)
});