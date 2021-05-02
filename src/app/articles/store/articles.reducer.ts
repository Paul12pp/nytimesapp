import { ArticlesActions, ArticlesActionTypes } from './articles.actions';
import { articlesInitialState, ArticlesState } from './articles.state';

export function articlesReducer(state = articlesInitialState, action: ArticlesActions): ArticlesState {
  switch (action.type) {

    case ArticlesActionTypes.ARTICLES_QUERY: {
      return Object.assign({}, state, {
        isLoadingToday: true,
      });
    }

    case ArticlesActionTypes.ARTICLES_LOADED: {
      return Object.assign({}, state, {
        articlesToday: action.payload.articlesToday,
        isLoadingToday: false,
      });
    }
    
    case ArticlesActionTypes.ARTICLES_MOST_QUERY: {
      return Object.assign({}, state, {
        isLoadingMost: true,
      });
    }

    case ArticlesActionTypes.ARTICLES_MOST_LOADED: {
      return Object.assign({}, state, {
        articlesMost: action.payload.articlesMost,
        isLoadingMost: false,
      });
    }
    case ArticlesActionTypes.ARTICLES_LAST_QUERY: {
      return Object.assign({}, state, {
        isLoadingLast: true,
      });
    }

    case ArticlesActionTypes.ARTICLES_LAST_LOADED: {
      return Object.assign({}, state, {
        articlesLast: action.payload.articlesLast,
        isLoadingLast: false,
      });
    }
    case ArticlesActionTypes.ARTICLES_SEARCH_QUERY: {
      return Object.assign({}, state, {
        isLoadingSearch: true,
        busqueda: action.payload.busqueda,
      });
    }

    case ArticlesActionTypes.ARTICLES_SEARCH_LOADED: {
      return Object.assign({}, state, {
        articlesSearch: action.payload.articlesSearch,
        isLoadingSearch: false,
      });
    }
    case ArticlesActionTypes.ARTICLES_DETAIL_QUERY: {
      return Object.assign({}, state, {
        isLoadingDetail: true,
      });
    }

    case ArticlesActionTypes.ARTICLES_DETAIL_LOADED: {
      return Object.assign({}, state, {
        articleDetail: action.payload.articleDetail,
        isLoadingDetail: false,
      });
    }
    case ArticlesActionTypes.ARTICLES_ERROR: {
      return Object.assign({}, state, {
        isLoadingToday: false,
        error: action.payload.error
      });
    }

    default:
      return state;
  }
}