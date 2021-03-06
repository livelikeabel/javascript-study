import { Subject, fromEvent, from } from 'rxjs';
import { tap, map, switchMap, debounceTime, distinctUntilChanged, partition, retry, finalize, share } from 'rxjs/operators'
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
        tap(v => console.log("from keyup$", v)),
        share()
    )

let [user$, reset$] = keyup$
    .pipe(
        partition(query => query.trim().length > 0)
    )

user$ = user$
    .pipe(
        tap(showLoading),
        switchMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`)),
        tap(hideLoading),
        retry(2),
        finalize(hideLoading),
        tap(v => console.log('from user$', v))
    );

user$.subscribe({
    next: v => drawLayer(v.items),
    error: e => {
        console.error(e);
        alert(e.message);
    }
});

reset$
    .pipe(
        tap(v => $layer.innerHTML = ""),
        tap(v => console.log("from reset$", v))
    )
    .subscribe();