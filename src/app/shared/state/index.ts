import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromAuth from "./auth.reducer";
import * as fromBooks from "./books.reducer";

export interface State {
    books: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
    books: fromBooks.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

export const selectBookState = (state: State) => state.books;

export const selectAllBooks = createSelector(
    selectBookState,
    fromBooks.selectAll
);

export const selectActiveBooks = createSelector(
    selectBookState,
    fromBooks.selectActiveBook
);

export const selectBooksEarningsTotals = createSelector(
    selectBookState,
    fromBooks.selectEarningsTotals  
);
