const {Subject} = require('rxjs');

const subject = new Subject();

// subscribe 인자에 함수가 아닌 객체를 넘기네...?
subject.subscribe({
  next: function(v) {
    console.log('observerA: ' + v);
  }
});

subject.subscribe({
  next: function(v) {
    console.log('observerB: ' + v);
  }
});

subject.next(1);
subject.next(2);