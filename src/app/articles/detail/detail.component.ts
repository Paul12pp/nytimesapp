import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '@app/reducers';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticlesService } from '../services/articles.service';
import * as fromArticles from '../store/articles.actions';
import {
  getArticleDetail,
  getIsLoadingDetail
} from '../store/articles.selector';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id: string | null = '';
  urlImage: string = 'https://static01.nyt.com/';
  data: any = [];
  isLoading$!: Observable<boolean>;
  articles: any[] | null;
  articlesSub: Subscription | undefined;
  constructor(
    private services: ArticlesService,
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) {
    this.articles = [];
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isLoading$ = this.store.select(getIsLoadingDetail);
    this.articlesSub = this.store
      .select(getArticleDetail)
      .pipe(
        map((_articles: any[] | null) => {
          this.store.dispatch(
            new fromArticles.ArticlesQueryDetail({
              id: this.id ? this.id : '',
            }),
          );
          return _articles;
        }),
      )
      .subscribe((_articles: any[] | null) => {
        this.articles = _articles;
        console.log('articles', this.articles);
      });
  }
}
