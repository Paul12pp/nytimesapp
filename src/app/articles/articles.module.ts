import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CardArticlesComponent } from './components/card-articles/card-articles.component';
import { NavComponent } from './components/nav/nav.component';
import { DetailComponent } from './detail/detail.component';
import { LastSevenComponent } from './last-seven/last-seven.component';
import { MostViewedComponent } from './most-viewed/most-viewed.component';
import { SearchComponent } from './search/search.component';
import { ArticlesEffects } from './store/articles.effects';
import * as fromArticles from './store/articles.reducer';
import { TodayComponent } from './today/today.component';


@NgModule({
  declarations: [
    TodayComponent,
    MostViewedComponent,
    LastSevenComponent,
    DetailComponent,
    NavComponent,
    CardArticlesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    StoreModule.forFeature('articles', fromArticles.articlesReducer),
    EffectsModule.forFeature([ArticlesEffects]),
    RouterModule.forChild([
      {
        path: 'today',
        component: TodayComponent,
      },
      {
        path: 'most-viewed',
        component: MostViewedComponent,
      },
      {
        path: 'last-seven',
        component: LastSevenComponent,
      },
      {
        path: ':id',
        component: DetailComponent,
      },
      {
        path: ':termino/:tipo',
        component: SearchComponent,
      },
    ]),
  ],
  exports: [
    TodayComponent,
    MostViewedComponent,
    LastSevenComponent,
    DetailComponent
  ],
})
export class ArticlesModule {}
