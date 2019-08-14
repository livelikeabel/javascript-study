// 1. 배열,배열과 같은 객체
const { from } = require('rxjs');
from([10, 20, 30])
    .subscribe({
        next: console.log,
        error: console.error,
        complete: () => console.log('완료')
    })


const arguments$ = (function () {
    return from(arguments)
})(1, 2, 3)
    .subscribe({
        next: console.log,
        error: console.error,
        complete: () => console.log('done')
    });

//2.Iterable 객체
const map$ = from(new Map([[1, 2], [2, 4], [4, 8]]));
map$.subscribe({
    next: v => console.log(v),
    error: e => console.error(e),
    complete: () => console.log('완료')
});

// 3. Promise
const success$ = from(Promise.resolve(100));
success$.subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('완료')
});

const fail$ = from(Promise.reject('에러'));
fail$.subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('완료')
});