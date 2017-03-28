import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule // we use ngFor
  ],
  exports: [NavComponent],
  declarations: [NavComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
