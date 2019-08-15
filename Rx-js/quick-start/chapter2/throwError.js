const { throwError, NEVER, of } = require('rxjs')
const { map } = require('rxjs/operators')

of(1, -2, 3).pipe(
    map(number => number < 0 ? throwError("number는 0보다 커야해") : number)
).subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('완료')
})

of(1, -2, 3).pipe(
    map(number => number < 0 ? NEVER : number)
).subscribe({
    next: console.log,
    error: console.error,
    complete: () => console.log('완료')
})