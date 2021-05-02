import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AppState } from '../../reducers/index';
import { ArticlesService } from '../services/articles.service';
import * as fromArticles from './../store/articles.actions';
import { ArticlesActionTypes } from './articles.actions';

@Injectable()
export class ArticlesEffects {
  constructor(
    private actions$: Actions,
    private articlesServices: ArticlesService,
    private store: Store<AppState>,
  ) {}

  //   query$ = this.actions$.pipe(
  //     ofType(ArticlesActionTypes.ARTICLES_QUERY),
  //     withLatestFrom(this.store.pipe(select(getUser))),
  //     switchMap(([, user]: any) =>
  //       this.articlesServices.get(user.uid).pipe(
  //         map((data: any) => {
  //           const articlesData: any[] = data.map((res: any) => {
  //             const key = res.payload.key;
  //             const customer: any = res.payload.val();
  //             return {
  //               key: key,
  //               id: customer.id,
  //               name: customer.name,
  //               description: customer.description,
  //             };
  //           });
  //           return new fromArticles.ArticlesLoaded({ articles: articlesData });
  //         }),
  //         catchError((error) => {
  //           return of(new fromArticles.ArticlesError({ error }));
  //         }),
  //       ),
  //     ),
  //   );

  query$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActionTypes.ARTICLES_QUERY),
      exhaustMap(() =>
        this.articlesServices.getToday().pipe(
          map(
            (art) => new fromArticles.ArticlesLoaded({ articlesToday: art }),
            catchError((error) => {
              return of(new fromArticles.ArticlesError({ error }));
            }),
          ),
        ),
      ),
    ),
  );
  queryMost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActionTypes.ARTICLES_MOST_QUERY),
      exhaustMap(() =>
        this.articlesServices.getLast().pipe(
          map(
            (art) => new fromArticles.ArticlesLoadedMost({ articlesMost: art }),
            catchError((error) => {
              return of(new fromArticles.ArticlesError({ error }));
            }),
          ),
        ),
      ),
    ),
  );
  queryLast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActionTypes.ARTICLES_LAST_QUERY),
      exhaustMap(() =>
        this.articlesServices.getLast(7).pipe(
          map(
            (art) => new fromArticles.ArticlesLoadedLast({ articlesLast: art }),
            catchError((error) => {
              return of(new fromArticles.ArticlesError({ error }));
            }),
          ),
        ),
      ),
    ),
  );
  querySearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticlesActionTypes.ARTICLES_SEARCH_QUERY),
      map((action: fromArticles.ArticlesQuerySearch) => action.payload),
      exhaustMap((payload) =>
        this.articlesServices.search(payload).pipe(
          map(
            (art) => new fromArticles.ArticlesLoadedSearch({ articlesSearch: art }),
            catchError((error) => {
              return of(new fromArticles.ArticlesError({ error }));
            }),
          ),
        ),
      ),
    ),
  );
  queryDetail$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ArticlesActionTypes.ARTICLES_DETAIL_QUERY),
    map((action: fromArticles.ArticlesQueryDetail) => action.payload),
    exhaustMap((payload) =>
      this.articlesServices.detail(payload.id).pipe(
        map(
          (art) => new fromArticles.ArticlesLoadedDetail({ articleDetail: art }),
          catchError((error) => {
            return of(new fromArticles.ArticlesError({ error }));
          }),
        ),
      ),
    ),
  ),
);
  querySuccessfulyToday$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ArticlesActionTypes.ARTICLES_LOADED),
        map((action) => {
          return new fromArticles.ArticlesLoaded({ articlesToday: action });
        }),
      ),
    { dispatch: false },
  );
  querySuccessfulyMost$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ArticlesActionTypes.ARTICLES_MOST_LOADED),
        map((action) => {
          return new fromArticles.ArticlesLoadedMost({ articlesMost: action });
        }),
      ),
    { dispatch: false },
  );
  querySuccessfulylast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ArticlesActionTypes.ARTICLES_LAST_LOADED),
        map((action) => {
          return new fromArticles.ArticlesLoadedLast({ articlesLast: action });
        }),
      ),
    { dispatch: false },
  );
}
