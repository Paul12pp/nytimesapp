import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '@app/reducers';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticlesService } from '../services/articles.service';
import * as fromArticles from '../store/articles.actions';
import { getArticlesSearch, getIsLoadingSearch } from '../store/articles.selector';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  param:any;
  data:any=[];
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
    this.param = {
      termino:this.route.snapshot.paramMap.get('termino'),
      tipo:this.route.snapshot.paramMap.get('tipo')
    }
    this.isLoading$ = this.store.select(getIsLoadingSearch);
    this.articlesSub = this.store
      .select(getArticlesSearch)
      .pipe(
        map((_articles: any[] | null) => {
          this.store.dispatch(new fromArticles.ArticlesQuerySearch(this.param));
          return _articles;
        }),
      )
      .subscribe((_articles: any[] | null) => {
        this.articles = _articles;
        console.log('articles', this.articles);
      });
  }

}
