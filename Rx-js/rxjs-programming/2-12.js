const sink = toSubscriber(observerOrNext, error, complete);

if (operator) {
  operator.call(sink, this.source);
} else {
  sink.add(this._trySubscribe(sink));
}

_trySubscribe(sink) {
  try {
    return this._subscribe(sink);
  }
  catch(err) {
    sink.syncErrorThrown = true;
    sink.syncErrorValue = err;
    sink.errorr(err);
  }
}