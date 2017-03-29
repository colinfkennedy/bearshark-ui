import { Component } from '@angular/core';

@Component({
  selector: 'bear-shark',
  template: `
    <bearshark-nav></bearshark-nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent  { name = 'BearShark'; }
