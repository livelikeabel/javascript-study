import { createSelector } from '@ngrx/store';

// export const getCount = createSelector(
//     getCounterValue,
//     (counter, props) => counter * props.multiply
// );

// app.component.ts
// ngOnInit() {
//     this.counter = this.store.pipe(select(fromRoot.getCount, { multiply: 2}))
// }


export const getCount = () => createSelector(
    (state, props) => state.counter[props.id],
    (counter, props) => counter * props.multiply
);


ngOnInit() {
    this.couter2 = this.store.pipe(select(fromRoot.getCount(), { id: 'counter2', multiply: 2 }));
    this.couter4 = this.store.pipe(select(fromRoot.getCount(), { id: 'counter4', multiply: 4 }));
    this.couter6 = this.store.pipe(select(fromRoot.getCount(), { id: 'counter6', multiply: 6 }));
}