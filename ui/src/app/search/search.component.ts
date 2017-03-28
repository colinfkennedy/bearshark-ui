import { Component } from '@angular/core';

import { Segment } from './segment';

@Component({
  selector: 'bearshark-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent {

  sentence = 'Here are the segments we found';
  segmentsData: Segment[] = [{
    segmentLongName: 'Test Segment',
    segmentId: 123456,
    aceId: 456789,
    impressions: 100,
    dataRevenue: 5555,
    revenue: 6666,
    price: 2
  }];

}
