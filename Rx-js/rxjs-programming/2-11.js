import {Observable} from "rxjs";

lift(operator) {
  const observable = new Observable();
  observable.source = this;
  observable.operator = operator;
  return observable;
}