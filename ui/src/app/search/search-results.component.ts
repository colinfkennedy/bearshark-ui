import { Component, Input, OnChanges} from '@angular/core';

import { Segment } from './segment';
import { SearchService }  from '../service/search.service';

@Component({
  selector: 'bearshark-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: [ './search-results.component.css' ]
})

export class SearchResultsComponent implements OnChanges {

  detailSegment: Segment;
  detailsShowing = false;
  @Input() segments: Segment[];
  @Input() sentence: string;

  constructor(
    private searchService: SearchService
  ) {}

  ngOnChanges() {
    this.closeDetailView();
  }

  openDetailView(segmentId: number) {
    this.searchService.getSegmentDetails(segmentId).then(segment => {
      this.detailSegment = segment;
      this.detailsShowing = true;
    });
  }

  closeDetailView() {
    this.detailSegment = null;
    this.detailsShowing = false;
  }
}
