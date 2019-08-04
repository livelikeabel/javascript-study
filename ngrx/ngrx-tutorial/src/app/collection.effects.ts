import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, concatMap, withLatestFrom } from 'rxjs/operators';
import { CollectionApiActions } from '../actions';
import * as fromBooks from '../reducers';

@Injectable()
export class CollectionEffects {
    addBookToCallectionSuccess$ = createEffect(
        () => this.actions$.pipe(
            ofType(CollectionApiActions.addBookSuccess),
            concatMap(action => of(action).pipe(
                withLatestFrom(this.store.pipe(select(fromBooks.getCollectionBookIds)))
            )),
            tap(([action, bookCollection]) => {
                if (bookCollection.length === 1) {
                    window.alert('Congrats on adding your first book!');
                } else {
                    window.alert('You have added book number ' + bookCollection.length);
                }
            })
        ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private store: Store<fromBooks.State>
    ) {}
}