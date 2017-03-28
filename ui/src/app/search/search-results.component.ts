import { Component, Input } from '@angular/core';

import { Segment } from './segment';

@Component({
  selector: 'bearshark-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: [ './search-results.component.css' ]
})

export class SearchResultsComponent {

    @Input()  segmentsData: Segment[];
    @Input() sentence: string;

}
