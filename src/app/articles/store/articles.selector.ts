import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState } from './articles.state';

export const getArticlesState = createFeatureSelector<ArticlesState>('articles');

export const getArticles = createSelector(
  getArticlesState,
  articles => articles.articlesToday
);

export const getIsLoadingToday = createSelector(
  getArticlesState,
  articles => articles.isLoadingToday
);
//mostviewed
export const getArticlesMost = createSelector(
  getArticlesState,
  articles => articles.articlesMost
);

export const getIsLoadingMost = createSelector(
  getArticlesState,
  articles => articles.isLoadingMost
);
//lastSeven
export const getArticlesLast = createSelector(
  getArticlesState,
  articles => articles.articlesLast
);
export const getIsLoadingLast = createSelector(
  getArticlesState,
  articles => articles.isLoadingLast
);
//Search
export const getArticlesSearch = createSelector(
  getArticlesState,
  articles => articles.articlesSearch
);
export const getIsLoadingSearch = createSelector(
  getArticlesState,
  articles => articles.isLoadingSearch
);
//detail
export const getArticleDetail = createSelector(
  getArticlesState,
  articles => articles.articleDetail
);
export const getIsLoadingDetail = createSelector(
  getArticlesState,
  articles => articles.isLoadingDetail
);
//Error
export const getError = createSelector(
  getArticlesState,
  articles => articles.error
);