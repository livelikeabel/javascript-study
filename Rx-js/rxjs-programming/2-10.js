const {range} = require('rxjs');
const {filter, map} = require('rxjs/operators');

range(1, 10).pipe(
  filter(value => value % divisor === 0),
  map(value => value + 1)
);