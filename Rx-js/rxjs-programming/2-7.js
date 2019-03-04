const {interval} = require('rxjs');
const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe(function(x) {
  console.log('first: ' + x);
});

const childSubscription = observable2.subscribe(function(x) {
  console.log('second: ' + x);
});

subscription.add(childSubscription);

setTimeout(() => subscription.unsubscribe(), 4000);