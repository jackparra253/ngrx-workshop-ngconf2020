import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromAuth from "./auth.reducer";
import * as fromBooks from "./books.reducer";
import { logoutMetareducer } from "./logout.metareducer";

export interface State {
    auth: fromAuth.State;
    books: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.Reducer,
    books: fromBooks.reducer
};

export const metaReducers: MetaReducer<State>[] = [logoutMetareducer];

/**
 * Auth Selectors
 */
 export const selectAuthState = (state: State) => state.auth;
 export const selectGettingAuthStatus = createSelector(
     selectAuthState,
     fromAuth.selectGettingStatus
 );
export const selectAuthUser = createSelector(
    selectAuthState,
    fromAuth.selectUser
);
export const selectAuthError = createSelector(
    selectAuthState,
    fromAuth.selectError
);

/**
 * Books Selectors
 */
export const selectBookState = (state: State) => state.books;
export const selectAllBooks = createSelector(
    selectBookState,
    fromBooks.selectAll
);
export const selectActiveBook = createSelector(
    selectBookState,
    fromBooks.selectActiveBook
);
export const selectBooksEarningsTotals = createSelector(
    selectBookState,
    fromBooks.selectEarningsTotals  
);