const {Observable} = require('rxjs');

const observableCreated$ = Observable.create(function subscribe(observer) {
  // intervalID 자원 추적
  const intervalID = setInterval(function() {
    observer.next('hi');
  }, 1000);
  
  // intervalID 자원을 해제하고 재배치하는 방법을 제공
  return function unsubscribe() {
    clearInterval(intervalID);
  };
});

const subscription = observableCreated$.subscribe(
  function next(item) { console.log(item)},
  function error(e) {},
  function complete() { console.log('complete')}
)

setTimeout(() => subscription.unsubscribe(), 4000)
