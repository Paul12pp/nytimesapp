import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/reducers';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticlesService } from '../services/articles.service';
import * as fromArticles from '../store/articles.actions';
import { getArticlesMost, getIsLoadingMost } from '../store/articles.selector';

@Component({
  selector: 'app-most-viewed',
  templateUrl: './most-viewed.component.html',
  styleUrls: ['./most-viewed.component.scss'],
})
export class MostViewedComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  articles: any[] | null;
  articlesSub: Subscription | undefined;
  data: any = [];
  constructor(
    private services: ArticlesService,
    private store: Store<AppState>,
  ) {
    this.articles = [];
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getIsLoadingMost);
    this.articlesSub = this.store
      .select(getArticlesMost)
      .pipe(
        map((_articles: any[] | null) => {
          this.store.dispatch(new fromArticles.ArticlesQueryMost());
          return _articles;
        }),
      )
      .subscribe((_articles: any[] | null) => {
        this.articles = _articles;
        console.log('articles', this.articles);
      });
  }
}
