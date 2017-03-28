import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <bearshark-nav></bearshark-nav>
    <h1>Hello {{name}}</h1>
  `
})
export class AppComponent  { name = 'Angular'; }
