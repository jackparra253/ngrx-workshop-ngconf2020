import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { mergeMap, map, exhaustMap, concatMap } from "rxjs/operators";
import { BooksService } from "../shared/services";
import { BooksPageActions, BooksApiActions } from "./actions";

@Injectable() 
export class BookApiEffects {
    constructor(private bookService: BooksService, private actions$: Actions){}

    loadBooks$ = createEffect(() => 
        this.actions$.pipe(
            ofType(BooksPageActions.enter),
            exhaustMap(() => 
                this.bookService
                    .all()
                    .pipe(map(books => BooksApiActions.booksLoaded({ books })))
            )
        )   
    );    

    createBook$ = createEffect(() => 
        this.actions$.pipe(
            ofType(BooksPageActions.createBook),
            concatMap(action => 
                this.bookService
                .create(action.book)
                .pipe(map(book => BooksApiActions.bookCreated({ book })))
            )
        )
    );

    updateBook$ = createEffect(() => 
        this.actions$.pipe(
            ofType(BooksPageActions.updateBook),
            concatMap(action =>
                this.bookService
                .update(action.bookId, action.changes)
                .pipe(map(book => BooksApiActions.bookUpdated({ book })))
            )
        )
    );

    deleteBook$ = createEffect(() => 
        this.actions$.pipe(
            ofType(BooksPageActions.deleteBook),
            mergeMap(action =>
                this.bookService
                .delete(action.bookId)
                .pipe(map(() => BooksApiActions.bookDeleted({ bookId: action.bookId })))
            )
        )
    );
}
