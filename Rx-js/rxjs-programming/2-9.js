const {interval} = require('rxjs');
const {filter} = require('rxjs/operators');

let divisor = 2;
setInterval(() => {
  divisor = (divisor + 1) % 10;
}, 500);

interval(700).pipe(
  filter(v => v % divisor === 0)
).subscribe(v => console.log(v));