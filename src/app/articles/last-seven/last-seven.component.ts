import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/reducers';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticlesService } from '../services/articles.service';
import * as fromArticles from '../store/articles.actions';
import { getArticlesLast, getIsLoadingLast } from '../store/articles.selector';

@Component({
  selector: 'app-last-seven',
  templateUrl: './last-seven.component.html',
  styleUrls: ['./last-seven.component.scss']
})
export class LastSevenComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  articles: any[] | null;
  articlesSub: Subscription | undefined;
  data:any=[];
  constructor(private services:ArticlesService,private store: Store<AppState>) { 
    this.articles=[];
  }
  ngOnInit(): void {
    this.isLoading$ = this.store.select(getIsLoadingLast);
    this.articlesSub = this.store
      .select(getArticlesLast)
      .pipe(
        map((_articles: any[]|null) => {
          this.store.dispatch(new fromArticles.ArticlesQueryLast());
          return _articles;
        }),
      )
      .subscribe((_articles: any[]|null) => {
        this.articles = _articles;
        console.log('articles',this.articles)
      });
  }
}