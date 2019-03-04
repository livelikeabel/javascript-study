const {Observable} = require('rxjs');
const {map, toArray} = require('rxjs/operators');

const observableCreated$ = Observable.create(function(observer) {
  console.log('Observable BEGIN');
  const arr = [1, 2];
  for (let i = 0; i < arr.length; i++) {
    console.log(`current array: arr[${i}]`);
    observer.next(arr[i]);
  }
  console.log('BEFORE complete');
  observer.complete();
  console.log('observable END');
});

function logAndGet(original, value) {
  console.log(`original: ${original}, map value: ${value}`);
  return value
}

observableCreated$.pipe(
  map(v => logAndGet(v, v * 2)),
  map(v => logAndGet(v, v + 1)),
  map(v => logAndGet(v, v * 3)),
  toArray()
).subscribe(arr => console.log(arr))