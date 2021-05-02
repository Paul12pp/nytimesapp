import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiRoutes, getRoute } from '@app/@core/api/api.routes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private mostviewed: string;
  private today: string;
  private find: string;
  private details: string;
  private keyLast = '.json?api-key=lBFTOxlgr8GHUBh0dXZuPehAZl8yC5cj';
  private key = '&api-key=lBFTOxlgr8GHUBh0dXZuPehAZl8yC5cj';
  constructor(private http: HttpClient) {
    this.mostviewed = getRoute(apiRoutes.articles.mostviewed);
    this.today = getRoute(apiRoutes.articles.today);
    this.find = getRoute(apiRoutes.articles.search);
    this.details = getRoute(apiRoutes.articles.detail);
    console.log('articles services ready');
  }

  getLast(day=1): Observable<any> {
    const route = `${this.mostviewed}${day}`+this.keyLast;
    return this.http.get<any>(route).pipe(map(data => data.results));
  }
  // https://api.nytimes.com/svc/search/v2/
  getToday():Observable<any>{
    const route = `${this.today}`+this.key;
    return this.http.get<any>(route).pipe(map(data => data.response.docs));
  }
  detail(id:string):Observable<any>{
    const route = `${this.details}"${id}"`+this.key;
    return this.http.get<any>(route).pipe(map(data => data.response.docs));
  }
  search(data:any):Observable<any>{
    let route = ''
    if(data.tipo==1){
      route= `${this.find}byline:"${data.termino}"`+this.key;
    }else{
      route= `${this.find}headline:"${data.termino}"`+this.key;
    }
    return this.http.get<any>(route).pipe(map(data => data.response.docs));
  }
}
