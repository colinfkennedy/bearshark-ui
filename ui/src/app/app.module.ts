import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { CoreModule }       from './core/core.module';
import { SearchComponent }  from './search/search.component';
import { SearchResultsComponent }  from './search/search-results.component';

@NgModule({
  imports:      [
    BrowserModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
