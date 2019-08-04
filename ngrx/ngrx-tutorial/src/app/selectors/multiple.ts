import { createSelector } from '@ngrx/store';

export interface User {
    id: number;
    name: string;
}

export interface Book {
    id: number;
    userId: number;
    name: string;
}

export interface AppState {
    selectedUser: User;
    allBooks: Book[];
}

export const selectUser = (state: AppState) => state.selectedUser;
export const selectAllBooks = (state: AppState) => state.allBooks;

export const selectVisibleBooks = createSelector(
    selectUser,
    selectAllBooks,
    (sellectedUser: User, allBooks: Book[]) => {
        if (sellectedUser && allBooks) {
            return allBooks.filter((book: Book) => book.userId === sellectedUser.id);
        } else {
            return allBooks;
        }
    }
);
