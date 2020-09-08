import { ActionReducerMap, createSelector, MetaReducer, ActionReducer, Action } from "@ngrx/store";
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

export const selectActiveBook = createSelector(
    selectBookState,
    fromBooks.selectActiveBook
);

export const selectBooksEarningsTotals = createSelector(
    selectBookState,
    fromBooks.selectEarningsTotals  
);

// function logger(reduccer:ActionReducer<any, any>){
//     return (state:any, action: Action) => {
//         console.log('previous state ', state);
//         console.log('previous action', action);

//         const nextState = reduccer(state, action);

//         return nextState;
//     }
// }