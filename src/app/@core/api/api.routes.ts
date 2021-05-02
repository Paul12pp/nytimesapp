import * as moment from 'moment';
import { environment } from '../../../environments/environment';
export const apiRoutes = {
  articles: {
    mostviewed: '/mostpopular/v2/viewed/',
    today:`/search/v2/articlesearch.json?begin_date=${moment(new Date()).format('YYYYMMDD')}&end_date=${moment(new Date()).format('YYYYMMDD')}`,
    detail:`/search/v2/articlesearch.json?fq=web_url:`,
    search:`/search/v2/articlesearch.json?fq=`
  },
};

export function getRoute(path: string): string {
  return environment.apiUrl + path;
}
