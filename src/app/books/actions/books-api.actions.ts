import { createAction, props } from "@ngrx/store";
import { BookModel, BookRequiredProps } from "src/app/shared/models";

const actionBase = '[Books API]';

export const booksLoaded = createAction(
    `${actionBase} Book Loaded Succes`,
    props<{books: BookModel[]}>()
);

export const bookCreated = createAction(
    `${actionBase} Book Created Success`,
    props<{book: BookModel}>()
);

export const bookUpdated = createAction(
    `${actionBase} Book Updated Success`,
    props<{book: BookModel}>()
);

export const bookDeleted = createAction(
    `${actionBase} Book Deleted Success`,
    props<{bookId: string}>()
);