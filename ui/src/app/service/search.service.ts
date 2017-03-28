import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Segment } from '../search/segment';

@Injectable()
export class SearchService {
  private searchUrl = 'api/search';

  constructor(private http: Http) { }

  search(): Promise<Segment[]> {
    return this.http.get(this.searchUrl)
      .toPromise()
      .then(response => response.json().data as Segment[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
