import { Component, Input } from '@angular/core';

import { Segment } from './segment';

import 'chartjs';

@Component({
  selector: 'bearshark-search-detailss',
  templateUrl: './search-details.component.html',
  styleUrls: [ './search-details.component.css' ]
})

export class SearchDetailsComponent {

  @Input()  segment: Segment;

}
