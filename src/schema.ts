/* tslint:disable */


/**
 * AUTO-GENERATED FILE @ 2020-03-06 16:20:05 - DO NOT EDIT!
 *
 * This file was automatically generated by schemats v.3.0.3
 * $ schemats generate -c postgres://localhost/mostly_ormless -t appleTransactions -t authors -t books -t emailAuthentication -t employees -t stores -t tags -s public
 *
 */


import {
    JSONValue,
    DateString,
    SQLFragment,
    GenericSQLExpression,
    ColumnNames,
    ColumnValues,
    ParentColumn,
    DefaultType,
    AllType,
    UpsertAction,
    SelectResultMode,
    SQLFragmentsMap,
    PromisedSQLFragmentReturnTypeMap,
} from "./core";

export type appleEnvironment = 'PROD' | 'Sandbox';
export namespace every {
    export type appleEnvironment = ['PROD', 'Sandbox'];
}

export namespace appleTransactions {
    export type Table = "appleTransactions";
    export interface Selectable {
        environment: appleEnvironment;
        originalTransactionId: string;
        accountId: number;
        latestReceiptData: string | null;
    }
    export type JSONSelectable = {
        [K in keyof Selectable]: Selectable[K] extends Date ? DateString : Selectable[K] };
    export interface Insertable {
        environment: appleEnvironment | SQLFragment;
        originalTransactionId: string | SQLFragment;
        accountId: number | SQLFragment;
        latestReceiptData?: string | null | DefaultType | SQLFragment;
    }
    export interface Updatable extends Partial<Insertable> { };
    export type Whereable = { [K in keyof Selectable]?: Selectable[K] | SQLFragment | ParentColumn };
    export interface UpsertReturnable extends Selectable, UpsertAction { };
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type JSONOnlyCols<T extends readonly Column[]> = Pick<JSONSelectable, T[number]>;
    export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
    export type SQL = SQLExpression | SQLExpression[];
    export interface OrderSpec {
        by: SQL;
        direction: 'ASC' | 'DESC';
        nulls?: 'FIRST' | 'LAST';
    }
    export interface SelectOptions<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> {
        order?: OrderSpec[];
        limit?: number;
        offset?: number;
        columns?: C;
        extras?: E,
        lateral?: L;
        alias?: string;
    }
    type BaseSelectReturnType<C extends Column[]> = C extends undefined ? JSONSelectable : JSONOnlyCols<C>;
    type EnhancedSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> =
        L extends undefined ?
        (E extends undefined ? BaseSelectReturnType<C> : BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<E>) :
        (E extends undefined ?
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> :
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> & PromisedSQLFragmentReturnTypeMap<E>);
    export type FullSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode> =
        M extends SelectResultMode.Many ? EnhancedSelectReturnType<C, L, E>[] :
        M extends SelectResultMode.One ? EnhancedSelectReturnType<C, L, E> | undefined : number;
}

export namespace authors {
    export type Table = "authors";
    export interface Selectable {
        id: number;
        name: string;
        isLiving: boolean | null;
    }
    export type JSONSelectable = {
        [K in keyof Selectable]: Selectable[K] extends Date ? DateString : Selectable[K] };
    export interface Insertable {
        id?: number | DefaultType | SQLFragment;
        name: string | SQLFragment;
        isLiving?: boolean | null | DefaultType | SQLFragment;
    }
    export interface Updatable extends Partial<Insertable> { };
    export type Whereable = { [K in keyof Selectable]?: Selectable[K] | SQLFragment | ParentColumn };
    export interface UpsertReturnable extends Selectable, UpsertAction { };
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type JSONOnlyCols<T extends readonly Column[]> = Pick<JSONSelectable, T[number]>;
    export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
    export type SQL = SQLExpression | SQLExpression[];
    export interface OrderSpec {
        by: SQL;
        direction: 'ASC' | 'DESC';
        nulls?: 'FIRST' | 'LAST';
    }
    export interface SelectOptions<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> {
        order?: OrderSpec[];
        limit?: number;
        offset?: number;
        columns?: C;
        extras?: E,
        lateral?: L;
        alias?: string;
    }
    type BaseSelectReturnType<C extends Column[]> = C extends undefined ? JSONSelectable : JSONOnlyCols<C>;
    type EnhancedSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> =
        L extends undefined ?
        (E extends undefined ? BaseSelectReturnType<C> : BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<E>) :
        (E extends undefined ?
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> :
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> & PromisedSQLFragmentReturnTypeMap<E>);
    export type FullSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode> =
        M extends SelectResultMode.Many ? EnhancedSelectReturnType<C, L, E>[] :
        M extends SelectResultMode.One ? EnhancedSelectReturnType<C, L, E> | undefined : number;
}

export namespace books {
    export type Table = "books";
    export interface Selectable {
        id: number;
        authorId: number;
        title: string | null;
        createdAt: Date;
        updatedAt: Date;
    }
    export type JSONSelectable = {
        [K in keyof Selectable]: Selectable[K] extends Date ? DateString : Selectable[K] };
    export interface Insertable {
        id?: number | DefaultType | SQLFragment;
        authorId: number | SQLFragment;
        title?: string | null | DefaultType | SQLFragment;
        createdAt?: Date | DefaultType | SQLFragment;
        updatedAt?: Date | DefaultType | SQLFragment;
    }
    export interface Updatable extends Partial<Insertable> { };
    export type Whereable = { [K in keyof Selectable]?: Selectable[K] | SQLFragment | ParentColumn };
    export interface UpsertReturnable extends Selectable, UpsertAction { };
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type JSONOnlyCols<T extends readonly Column[]> = Pick<JSONSelectable, T[number]>;
    export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
    export type SQL = SQLExpression | SQLExpression[];
    export interface OrderSpec {
        by: SQL;
        direction: 'ASC' | 'DESC';
        nulls?: 'FIRST' | 'LAST';
    }
    export interface SelectOptions<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> {
        order?: OrderSpec[];
        limit?: number;
        offset?: number;
        columns?: C;
        extras?: E,
        lateral?: L;
        alias?: string;
    }
    type BaseSelectReturnType<C extends Column[]> = C extends undefined ? JSONSelectable : JSONOnlyCols<C>;
    type EnhancedSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> =
        L extends undefined ?
        (E extends undefined ? BaseSelectReturnType<C> : BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<E>) :
        (E extends undefined ?
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> :
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> & PromisedSQLFragmentReturnTypeMap<E>);
    export type FullSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode> =
        M extends SelectResultMode.Many ? EnhancedSelectReturnType<C, L, E>[] :
        M extends SelectResultMode.One ? EnhancedSelectReturnType<C, L, E> | undefined : number;
}

export namespace emailAuthentication {
    export type Table = "emailAuthentication";
    export interface Selectable {
        email: string;
        consecutiveFailedLogins: number;
        lastFailedLogin: Date | null;
    }
    export type JSONSelectable = {
        [K in keyof Selectable]: Selectable[K] extends Date ? DateString : Selectable[K] };
    export interface Insertable {
        email: string | SQLFragment;
        consecutiveFailedLogins?: number | DefaultType | SQLFragment;
        lastFailedLogin?: Date | null | DefaultType | SQLFragment;
    }
    export interface Updatable extends Partial<Insertable> { };
    export type Whereable = { [K in keyof Selectable]?: Selectable[K] | SQLFragment | ParentColumn };
    export interface UpsertReturnable extends Selectable, UpsertAction { };
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type JSONOnlyCols<T extends readonly Column[]> = Pick<JSONSelectable, T[number]>;
    export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
    export type SQL = SQLExpression | SQLExpression[];
    export interface OrderSpec {
        by: SQL;
        direction: 'ASC' | 'DESC';
        nulls?: 'FIRST' | 'LAST';
    }
    export interface SelectOptions<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> {
        order?: OrderSpec[];
        limit?: number;
        offset?: number;
        columns?: C;
        extras?: E,
        lateral?: L;
        alias?: string;
    }
    type BaseSelectReturnType<C extends Column[]> = C extends undefined ? JSONSelectable : JSONOnlyCols<C>;
    type EnhancedSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> =
        L extends undefined ?
        (E extends undefined ? BaseSelectReturnType<C> : BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<E>) :
        (E extends undefined ?
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> :
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> & PromisedSQLFragmentReturnTypeMap<E>);
    export type FullSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode> =
        M extends SelectResultMode.Many ? EnhancedSelectReturnType<C, L, E>[] :
        M extends SelectResultMode.One ? EnhancedSelectReturnType<C, L, E> | undefined : number;
}

export namespace employees {
    export type Table = "employees";
    export interface Selectable {
        id: number;
        name: string;
        managerId: number | null;
    }
    export type JSONSelectable = {
        [K in keyof Selectable]: Selectable[K] extends Date ? DateString : Selectable[K] };
    export interface Insertable {
        id?: number | DefaultType | SQLFragment;
        name: string | SQLFragment;
        managerId?: number | null | DefaultType | SQLFragment;
    }
    export interface Updatable extends Partial<Insertable> { };
    export type Whereable = { [K in keyof Selectable]?: Selectable[K] | SQLFragment | ParentColumn };
    export interface UpsertReturnable extends Selectable, UpsertAction { };
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type JSONOnlyCols<T extends readonly Column[]> = Pick<JSONSelectable, T[number]>;
    export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
    export type SQL = SQLExpression | SQLExpression[];
    export interface OrderSpec {
        by: SQL;
        direction: 'ASC' | 'DESC';
        nulls?: 'FIRST' | 'LAST';
    }
    export interface SelectOptions<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> {
        order?: OrderSpec[];
        limit?: number;
        offset?: number;
        columns?: C;
        extras?: E,
        lateral?: L;
        alias?: string;
    }
    type BaseSelectReturnType<C extends Column[]> = C extends undefined ? JSONSelectable : JSONOnlyCols<C>;
    type EnhancedSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> =
        L extends undefined ?
        (E extends undefined ? BaseSelectReturnType<C> : BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<E>) :
        (E extends undefined ?
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> :
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> & PromisedSQLFragmentReturnTypeMap<E>);
    export type FullSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode> =
        M extends SelectResultMode.Many ? EnhancedSelectReturnType<C, L, E>[] :
        M extends SelectResultMode.One ? EnhancedSelectReturnType<C, L, E> | undefined : number;
}

export namespace stores {
    export type Table = "stores";
    export interface Selectable {
        id: number;
        name: string;
        geom: any;
    }
    export type JSONSelectable = {
        [K in keyof Selectable]: Selectable[K] extends Date ? DateString : Selectable[K] };
    export interface Insertable {
        id?: number | DefaultType | SQLFragment;
        name: string | SQLFragment;
        geom: any | SQLFragment;
    }
    export interface Updatable extends Partial<Insertable> { };
    export type Whereable = { [K in keyof Selectable]?: Selectable[K] | SQLFragment | ParentColumn };
    export interface UpsertReturnable extends Selectable, UpsertAction { };
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type JSONOnlyCols<T extends readonly Column[]> = Pick<JSONSelectable, T[number]>;
    export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
    export type SQL = SQLExpression | SQLExpression[];
    export interface OrderSpec {
        by: SQL;
        direction: 'ASC' | 'DESC';
        nulls?: 'FIRST' | 'LAST';
    }
    export interface SelectOptions<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> {
        order?: OrderSpec[];
        limit?: number;
        offset?: number;
        columns?: C;
        extras?: E,
        lateral?: L;
        alias?: string;
    }
    type BaseSelectReturnType<C extends Column[]> = C extends undefined ? JSONSelectable : JSONOnlyCols<C>;
    type EnhancedSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> =
        L extends undefined ?
        (E extends undefined ? BaseSelectReturnType<C> : BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<E>) :
        (E extends undefined ?
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> :
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> & PromisedSQLFragmentReturnTypeMap<E>);
    export type FullSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode> =
        M extends SelectResultMode.Many ? EnhancedSelectReturnType<C, L, E>[] :
        M extends SelectResultMode.One ? EnhancedSelectReturnType<C, L, E> | undefined : number;
}

export namespace tags {
    export type Table = "tags";
    export interface Selectable {
        tag: string;
        bookId: number;
    }
    export type JSONSelectable = {
        [K in keyof Selectable]: Selectable[K] extends Date ? DateString : Selectable[K] };
    export interface Insertable {
        tag: string | SQLFragment;
        bookId: number | SQLFragment;
    }
    export interface Updatable extends Partial<Insertable> { };
    export type Whereable = { [K in keyof Selectable]?: Selectable[K] | SQLFragment | ParentColumn };
    export interface UpsertReturnable extends Selectable, UpsertAction { };
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type JSONOnlyCols<T extends readonly Column[]> = Pick<JSONSelectable, T[number]>;
    export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
    export type SQL = SQLExpression | SQLExpression[];
    export interface OrderSpec {
        by: SQL;
        direction: 'ASC' | 'DESC';
        nulls?: 'FIRST' | 'LAST';
    }
    export interface SelectOptions<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> {
        order?: OrderSpec[];
        limit?: number;
        offset?: number;
        columns?: C;
        extras?: E,
        lateral?: L;
        alias?: string;
    }
    type BaseSelectReturnType<C extends Column[]> = C extends undefined ? JSONSelectable : JSONOnlyCols<C>;
    type EnhancedSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap> =
        L extends undefined ?
        (E extends undefined ? BaseSelectReturnType<C> : BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<E>) :
        (E extends undefined ?
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> :
            BaseSelectReturnType<C> & PromisedSQLFragmentReturnTypeMap<L> & PromisedSQLFragmentReturnTypeMap<E>);
    export type FullSelectReturnType<C extends Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode> =
        M extends SelectResultMode.Many ? EnhancedSelectReturnType<C, L, E>[] :
        M extends SelectResultMode.One ? EnhancedSelectReturnType<C, L, E> | undefined : number;
}

export type Selectable = appleTransactions.Selectable | authors.Selectable | books.Selectable | emailAuthentication.Selectable | employees.Selectable | stores.Selectable | tags.Selectable;
export type JSONSelectable = appleTransactions.JSONSelectable | authors.JSONSelectable | books.JSONSelectable | emailAuthentication.JSONSelectable | employees.JSONSelectable | stores.JSONSelectable | tags.JSONSelectable;
export type Whereable = appleTransactions.Whereable | authors.Whereable | books.Whereable | emailAuthentication.Whereable | employees.Whereable | stores.Whereable | tags.Whereable;
export type Insertable = appleTransactions.Insertable | authors.Insertable | books.Insertable | emailAuthentication.Insertable | employees.Insertable | stores.Insertable | tags.Insertable;
export type Updatable = appleTransactions.Updatable | authors.Updatable | books.Updatable | emailAuthentication.Updatable | employees.Updatable | stores.Updatable | tags.Updatable;
export type Table = appleTransactions.Table | authors.Table | books.Table | emailAuthentication.Table | employees.Table | stores.Table | tags.Table;
export type Column = appleTransactions.Column | authors.Column | books.Column | emailAuthentication.Column | employees.Column | stores.Column | tags.Column;
export type AllTables = [appleTransactions.Table, authors.Table, books.Table, emailAuthentication.Table, employees.Table, stores.Table, tags.Table];

export interface InsertSignatures {
    (table: appleTransactions.Table, values: appleTransactions.Insertable): SQLFragment<appleTransactions.Selectable>;
    (table: appleTransactions.Table, values: appleTransactions.Insertable[]): SQLFragment<appleTransactions.Selectable[]>;
    (table: authors.Table, values: authors.Insertable): SQLFragment<authors.Selectable>;
    (table: authors.Table, values: authors.Insertable[]): SQLFragment<authors.Selectable[]>;
    (table: books.Table, values: books.Insertable): SQLFragment<books.Selectable>;
    (table: books.Table, values: books.Insertable[]): SQLFragment<books.Selectable[]>;
    (table: emailAuthentication.Table, values: emailAuthentication.Insertable): SQLFragment<emailAuthentication.Selectable>;
    (table: emailAuthentication.Table, values: emailAuthentication.Insertable[]): SQLFragment<emailAuthentication.Selectable[]>;
    (table: employees.Table, values: employees.Insertable): SQLFragment<employees.Selectable>;
    (table: employees.Table, values: employees.Insertable[]): SQLFragment<employees.Selectable[]>;
    (table: stores.Table, values: stores.Insertable): SQLFragment<stores.Selectable>;
    (table: stores.Table, values: stores.Insertable[]): SQLFragment<stores.Selectable[]>;
    (table: tags.Table, values: tags.Insertable): SQLFragment<tags.Selectable>;
    (table: tags.Table, values: tags.Insertable[]): SQLFragment<tags.Selectable[]>;
}
export interface UpsertSignatures {
    (table: appleTransactions.Table, values: appleTransactions.Insertable, uniqueCols: appleTransactions.Column | appleTransactions.Column[], noNullUpdateCols?: appleTransactions.Column | appleTransactions.Column[]): SQLFragment<appleTransactions.UpsertReturnable>;
    (table: appleTransactions.Table, values: appleTransactions.Insertable[], uniqueCols: appleTransactions.Column | appleTransactions.Column[], noNullUpdateCols?: appleTransactions.Column | appleTransactions.Column[]): SQLFragment<appleTransactions.UpsertReturnable[]>;
    (table: authors.Table, values: authors.Insertable, uniqueCols: authors.Column | authors.Column[], noNullUpdateCols?: authors.Column | authors.Column[]): SQLFragment<authors.UpsertReturnable>;
    (table: authors.Table, values: authors.Insertable[], uniqueCols: authors.Column | authors.Column[], noNullUpdateCols?: authors.Column | authors.Column[]): SQLFragment<authors.UpsertReturnable[]>;
    (table: books.Table, values: books.Insertable, uniqueCols: books.Column | books.Column[], noNullUpdateCols?: books.Column | books.Column[]): SQLFragment<books.UpsertReturnable>;
    (table: books.Table, values: books.Insertable[], uniqueCols: books.Column | books.Column[], noNullUpdateCols?: books.Column | books.Column[]): SQLFragment<books.UpsertReturnable[]>;
    (table: emailAuthentication.Table, values: emailAuthentication.Insertable, uniqueCols: emailAuthentication.Column | emailAuthentication.Column[], noNullUpdateCols?: emailAuthentication.Column | emailAuthentication.Column[]): SQLFragment<emailAuthentication.UpsertReturnable>;
    (table: emailAuthentication.Table, values: emailAuthentication.Insertable[], uniqueCols: emailAuthentication.Column | emailAuthentication.Column[], noNullUpdateCols?: emailAuthentication.Column | emailAuthentication.Column[]): SQLFragment<emailAuthentication.UpsertReturnable[]>;
    (table: employees.Table, values: employees.Insertable, uniqueCols: employees.Column | employees.Column[], noNullUpdateCols?: employees.Column | employees.Column[]): SQLFragment<employees.UpsertReturnable>;
    (table: employees.Table, values: employees.Insertable[], uniqueCols: employees.Column | employees.Column[], noNullUpdateCols?: employees.Column | employees.Column[]): SQLFragment<employees.UpsertReturnable[]>;
    (table: stores.Table, values: stores.Insertable, uniqueCols: stores.Column | stores.Column[], noNullUpdateCols?: stores.Column | stores.Column[]): SQLFragment<stores.UpsertReturnable>;
    (table: stores.Table, values: stores.Insertable[], uniqueCols: stores.Column | stores.Column[], noNullUpdateCols?: stores.Column | stores.Column[]): SQLFragment<stores.UpsertReturnable[]>;
    (table: tags.Table, values: tags.Insertable, uniqueCols: tags.Column | tags.Column[], noNullUpdateCols?: tags.Column | tags.Column[]): SQLFragment<tags.UpsertReturnable>;
    (table: tags.Table, values: tags.Insertable[], uniqueCols: tags.Column | tags.Column[], noNullUpdateCols?: tags.Column | tags.Column[]): SQLFragment<tags.UpsertReturnable[]>;
}
export interface UpdateSignatures {
    (table: appleTransactions.Table, values: appleTransactions.Updatable, where: appleTransactions.Whereable | SQLFragment): SQLFragment<appleTransactions.Selectable[]>;
    (table: authors.Table, values: authors.Updatable, where: authors.Whereable | SQLFragment): SQLFragment<authors.Selectable[]>;
    (table: books.Table, values: books.Updatable, where: books.Whereable | SQLFragment): SQLFragment<books.Selectable[]>;
    (table: emailAuthentication.Table, values: emailAuthentication.Updatable, where: emailAuthentication.Whereable | SQLFragment): SQLFragment<emailAuthentication.Selectable[]>;
    (table: employees.Table, values: employees.Updatable, where: employees.Whereable | SQLFragment): SQLFragment<employees.Selectable[]>;
    (table: stores.Table, values: stores.Updatable, where: stores.Whereable | SQLFragment): SQLFragment<stores.Selectable[]>;
    (table: tags.Table, values: tags.Updatable, where: tags.Whereable | SQLFragment): SQLFragment<tags.Selectable[]>;
}
export interface DeleteSignatures {
    (table: appleTransactions.Table, where: appleTransactions.Whereable | SQLFragment): SQLFragment<appleTransactions.Selectable[]>;
    (table: authors.Table, where: authors.Whereable | SQLFragment): SQLFragment<authors.Selectable[]>;
    (table: books.Table, where: books.Whereable | SQLFragment): SQLFragment<books.Selectable[]>;
    (table: emailAuthentication.Table, where: emailAuthentication.Whereable | SQLFragment): SQLFragment<emailAuthentication.Selectable[]>;
    (table: employees.Table, where: employees.Whereable | SQLFragment): SQLFragment<employees.Selectable[]>;
    (table: stores.Table, where: stores.Whereable | SQLFragment): SQLFragment<stores.Selectable[]>;
    (table: tags.Table, where: tags.Whereable | SQLFragment): SQLFragment<tags.Selectable[]>;
}
export interface SelectSignatures {

    <C extends appleTransactions.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode = SelectResultMode.Many>(
        table: appleTransactions.Table,
        where: appleTransactions.Whereable | SQLFragment | AllType,
        options?: appleTransactions.SelectOptions<C, L, E>,
        mode?: M,
    ): SQLFragment<appleTransactions.FullSelectReturnType<C, L, E, M>>;

    <C extends authors.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode = SelectResultMode.Many>(
        table: authors.Table,
        where: authors.Whereable | SQLFragment | AllType,
        options?: authors.SelectOptions<C, L, E>,
        mode?: M,
    ): SQLFragment<authors.FullSelectReturnType<C, L, E, M>>;

    <C extends books.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode = SelectResultMode.Many>(
        table: books.Table,
        where: books.Whereable | SQLFragment | AllType,
        options?: books.SelectOptions<C, L, E>,
        mode?: M,
    ): SQLFragment<books.FullSelectReturnType<C, L, E, M>>;

    <C extends emailAuthentication.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode = SelectResultMode.Many>(
        table: emailAuthentication.Table,
        where: emailAuthentication.Whereable | SQLFragment | AllType,
        options?: emailAuthentication.SelectOptions<C, L, E>,
        mode?: M,
    ): SQLFragment<emailAuthentication.FullSelectReturnType<C, L, E, M>>;

    <C extends employees.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode = SelectResultMode.Many>(
        table: employees.Table,
        where: employees.Whereable | SQLFragment | AllType,
        options?: employees.SelectOptions<C, L, E>,
        mode?: M,
    ): SQLFragment<employees.FullSelectReturnType<C, L, E, M>>;

    <C extends stores.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode = SelectResultMode.Many>(
        table: stores.Table,
        where: stores.Whereable | SQLFragment | AllType,
        options?: stores.SelectOptions<C, L, E>,
        mode?: M,
    ): SQLFragment<stores.FullSelectReturnType<C, L, E, M>>;

    <C extends tags.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap, M extends SelectResultMode = SelectResultMode.Many>(
        table: tags.Table,
        where: tags.Whereable | SQLFragment | AllType,
        options?: tags.SelectOptions<C, L, E>,
        mode?: M,
    ): SQLFragment<tags.FullSelectReturnType<C, L, E, M>>;
}
export interface SelectOneSignatures {

    <C extends appleTransactions.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap>(
        table: appleTransactions.Table,
        where: appleTransactions.Whereable | SQLFragment | AllType,
        options?: appleTransactions.SelectOptions<C, L, E>,
    ): SQLFragment<appleTransactions.FullSelectReturnType<C, L, E, SelectResultMode.One>>;

    <C extends authors.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap>(
        table: authors.Table,
        where: authors.Whereable | SQLFragment | AllType,
        options?: authors.SelectOptions<C, L, E>,
    ): SQLFragment<authors.FullSelectReturnType<C, L, E, SelectResultMode.One>>;

    <C extends books.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap>(
        table: books.Table,
        where: books.Whereable | SQLFragment | AllType,
        options?: books.SelectOptions<C, L, E>,
    ): SQLFragment<books.FullSelectReturnType<C, L, E, SelectResultMode.One>>;

    <C extends emailAuthentication.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap>(
        table: emailAuthentication.Table,
        where: emailAuthentication.Whereable | SQLFragment | AllType,
        options?: emailAuthentication.SelectOptions<C, L, E>,
    ): SQLFragment<emailAuthentication.FullSelectReturnType<C, L, E, SelectResultMode.One>>;

    <C extends employees.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap>(
        table: employees.Table,
        where: employees.Whereable | SQLFragment | AllType,
        options?: employees.SelectOptions<C, L, E>,
    ): SQLFragment<employees.FullSelectReturnType<C, L, E, SelectResultMode.One>>;

    <C extends stores.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap>(
        table: stores.Table,
        where: stores.Whereable | SQLFragment | AllType,
        options?: stores.SelectOptions<C, L, E>,
    ): SQLFragment<stores.FullSelectReturnType<C, L, E, SelectResultMode.One>>;

    <C extends tags.Column[], L extends SQLFragmentsMap, E extends SQLFragmentsMap>(
        table: tags.Table,
        where: tags.Whereable | SQLFragment | AllType,
        options?: tags.SelectOptions<C, L, E>,
    ): SQLFragment<tags.FullSelectReturnType<C, L, E, SelectResultMode.One>>;
}
export interface CountSignatures {
    (table: appleTransactions.Table, where: appleTransactions.Whereable | SQLFragment | AllType, options?: { columns?: appleTransactions.Column[], alias?: string }): SQLFragment<number>;
    (table: authors.Table, where: authors.Whereable | SQLFragment | AllType, options?: { columns?: authors.Column[], alias?: string }): SQLFragment<number>;
    (table: books.Table, where: books.Whereable | SQLFragment | AllType, options?: { columns?: books.Column[], alias?: string }): SQLFragment<number>;
    (table: emailAuthentication.Table, where: emailAuthentication.Whereable | SQLFragment | AllType, options?: { columns?: emailAuthentication.Column[], alias?: string }): SQLFragment<number>;
    (table: employees.Table, where: employees.Whereable | SQLFragment | AllType, options?: { columns?: employees.Column[], alias?: string }): SQLFragment<number>;
    (table: stores.Table, where: stores.Whereable | SQLFragment | AllType, options?: { columns?: stores.Column[], alias?: string }): SQLFragment<number>;
    (table: tags.Table, where: tags.Whereable | SQLFragment | AllType, options?: { columns?: tags.Column[], alias?: string }): SQLFragment<number>;
}
