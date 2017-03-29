import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { Segment } from './segment';

import 'chartjs';

@Component({
  selector: 'bearshark-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: [ './search-details.component.css' ]
})
export class SearchDetailsComponent {

  @Input() segment: Segment;
}
