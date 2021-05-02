import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/reducers';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticlesService } from '../services/articles.service';
import * as fromArticles from '../store/articles.actions';
import { getArticles, getIsLoadingToday } from '../store/articles.selector';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  articles: any[] | null;
  articlesSub: Subscription | undefined;
  data: any = [];
  constructor(
    private services: ArticlesService,
    private store: Store<AppState>,
  ) {
    this.articles=[];
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getIsLoadingToday);
    this.articlesSub = this.store
      .select(getArticles)
      .pipe(
        map((_articles: any[]|null) => {
          this.store.dispatch(new fromArticles.ArticlesQuery());
          return _articles;
        }),
      )
      .subscribe((_articles: any[]|null) => {
        this.articles = _articles;
        console.log('articles',this.articles)
      });
    // this.services.getToday().subscribe((data) => {
    //   console.log(data);
    //   this.data = data;
    // });
  }
}
