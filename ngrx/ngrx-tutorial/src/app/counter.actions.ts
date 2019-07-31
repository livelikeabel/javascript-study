import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

// `createAction` function returns a function
export const login = createAction(
    '[Login Page] Login',
    props<{ username: string, password: string }>()
);
