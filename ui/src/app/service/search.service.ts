import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Segment } from '../search/segment';

@Injectable()
export class SearchService {
  private searchUrl = 'api/search';
  private segmentDetailsUrl = 'api/getSegmentDetails';

  constructor(private http: Http) { }

  search(term: string): Promise<Segment[]> {
    return this.http.post(this.searchUrl, {'searchQuery': term})
      .toPromise()
      .then(response => response.json().data as Segment[])
      .catch(this.handleError);
  }

  getSegmentDetails(segmentId: number): Promise<Segment> {
    console.log('Requesting segment details for: ', segmentId);
    return this.http.post(this.segmentDetailsUrl, {'segmentId': segmentId})
      .toPromise()
      .then(response => response.json().data as Segment)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
