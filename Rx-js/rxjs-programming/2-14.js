const {Observable} = require('rxjs');
const {map} = require('rxjs/operators');

const observableCreated$ = Observable.create(observer => {
  observer.next(1);
  observer.next(2);
  observer.complete();
})

observableCreated$.pipe(
  map(v => v * 2)
).subscribe(function next(item) {
  console.log(item);
});