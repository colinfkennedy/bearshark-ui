import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule }               from '@angular/http';

import { AppComponent }             from './app.component';
import { ChartModule }               from './core/chart/chart.module';
import { CoreModule }               from './core/core.module';
import { SearchComponent }          from './search/search.component';
import { SearchDetailsComponent }   from './search/search-details.component';
import { SearchResultsComponent }   from './search/search-results.component';
import { SearchService }            from './service/search.service';

@NgModule({
  imports:      [
    BrowserModule,
    ChartModule,
    CoreModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    SearchDetailsComponent,
    SearchResultsComponent
  ],
  providers: [
    SearchService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
