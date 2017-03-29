import { Component }      from '@angular/core';

import { Segment }        from './segment';
import { SearchService }  from '../service/search.service';

@Component({
  selector: 'bearshark-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [SearchService]
})
export class SearchComponent {
  segments: Segment[];
  sentence = 'Here are the segments we found';

  constructor(
    private searchService: SearchService
  ) {}
  
  search(term: string): void {
    this.searchService.search(term).then(segments => this.segments = segments);
  }
}
