import { fromEvent, from } from 'rxjs';
import { map, mergeAll, mergeMap, debounceTime, filter, distinctUntilChanged } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax';

const $layer = document.getElementById("suggestLayer");

function drawLayer(items) {
    console.log($layer)
    console.log($layer.innerHTML)
    $layer.innerHTML = items.map(user => {
        return `<li class="user">
        <img src="${user.avatar_url}" width="50px" height="50px" />
        <p><a href="${user.html_url}" target="_blank">${user.login}</a></p>
        </li>`
    }).join("");
}

const user$ = fromEvent(document.getElementById("search"), "keyup")
    .pipe(
        debounceTime(300),
        map(e => e.target.value),
        distinctUntilChanged(),
        filter(query => query.trim().length > 0),
        mergeMap(query => ajax.getJSON(`https://api.github.com/search/users?q=${query}`))
    );

user$.subscribe(v => {
    console.log(v.items)
    drawLayer(v.items)
    console.log($layer.innerHTML)
});