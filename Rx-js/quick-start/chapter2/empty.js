const { empty, of } = require('rxjs')
const { map } = require('rxjs/operators')


of(1, -2, 3).pipe(
    map(number => number < 0 ? empty() : number)
).subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('완료')
})