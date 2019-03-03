const {Observable} = require('rxjs');

Observable.create(function(observer) {
  console.log('BEGIN Observable');
  observer.next(1);
  observer.next(2);
  observer.complete();
  observer.next(3);
  console.log('END Observable');
}).subscribe(
  function next(item) { console.log(item);},
  function error(e) {},
  function complete() { console.log('complete')}
);

// subscribe를 하면, create에 인자로 준 함수를 실행하는데, observer.complete하면, 그 이후의 next는 실행되지 않는구나, 그런데 console.log()는 실행되는구나, error은 complete이후에도 실행이 될까...?
