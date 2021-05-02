import { Action } from '@ngrx/store';

export enum ArticlesActionTypes {
  ARTICLES_QUERY = '[Articles] Query',
  ARTICLES_LOADED = '[Articles] Fetched',
  ARTICLES_MOST_QUERY = '[ArticlesMost] Query',
  ARTICLES_MOST_LOADED = '[ArticlesMost] Fetched',
  ARTICLES_LAST_QUERY = '[ArticlesLast] Query',
  ARTICLES_LAST_LOADED = '[ArticlesLast] Fetched',
  ARTICLES_SEARCH_QUERY = '[ArticlesSearch] Query',
  ARTICLES_SEARCH_LOADED = '[ArticlesSearch] Fetched',
  ARTICLES_DETAIL_QUERY = '[ArticlesDetail] Query',
  ARTICLES_DETAIL_LOADED = '[ArticlesDetail] Fetched',
  ARTICLES_ERROR = '[Articles] Error',
}

export class ArticlesQuery implements Action {
  readonly type = ArticlesActionTypes.ARTICLES_QUERY;
}

export class ArticlesLoaded implements Action {
  readonly type = ArticlesActionTypes.ARTICLES_LOADED;
  constructor(public payload: { articlesToday: any[] }) {}
}
export class ArticlesQueryMost implements Action {
  readonly type = ArticlesActionTypes.ARTICLES_MOST_QUERY;
}
export class ArticlesLoadedMost implements Action {
  readonly type = ArticlesActionTypes.ARTICLES_MOST_LOADED;
  constructor(public payload: { articlesMost: any[] }) {}
}
export class ArticlesQueryLast implements Action {
  readonly type = ArticlesActionTypes.ARTICLES_LAST_QUERY;
}
export class ArticlesLoadedLast implements Action {
  readonly type = ArticlesActionTypes.ARTICLES_LAST_LOADED;
  constructor(public payload: { articlesLast: any[] }) {}
}
export class ArticlesQuerySearch implements Action {
  readonly type = ArticlesActionTypes.ARTICLES_SEARCH_QUERY;
  constructor(public payload: { busqueda:any }) {}
}
export class ArticlesLoadedSearch implements Action {
  readonly type = ArticlesActionTypes.ARTICLES_SEARCH_LOADED;
  constructor(public payload: { articlesSearch: any[] }) {}
}
export class ArticlesQueryDetail implements Action {
  readonly type = ArticlesActionTypes.ARTICLES_DETAIL_QUERY;
  constructor(public payload: { id:string }) {}
}
export class ArticlesLoadedDetail implements Action {
  readonly type = ArticlesActionTypes.ARTICLES_DETAIL_LOADED;
  constructor(public payload: { articleDetail: any }) {}
}

export class ArticlesError implements Action {
  readonly type = ArticlesActionTypes.ARTICLES_ERROR;

  constructor(public payload: { error: any }) {}
}

export type ArticlesActions =
  | ArticlesQuery
  | ArticlesLoaded
  | ArticlesQueryMost
  | ArticlesLoadedMost
  | ArticlesQueryLast
  | ArticlesLoadedLast
  | ArticlesQuerySearch
  | ArticlesLoadedSearch
  | ArticlesQueryDetail
  | ArticlesLoadedDetail
  | ArticlesError;
