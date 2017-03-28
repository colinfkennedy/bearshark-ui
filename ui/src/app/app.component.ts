import { Component } from '@angular/core';

@Component({
  selector: 'bear-shark',
  template: `
    <bearshark-nav></bearshark-nav>
    <bearshark-search></bearshark-search>
  `
})
export class AppComponent  { name = 'BearShark'; }
