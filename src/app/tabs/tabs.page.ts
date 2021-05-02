import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  hasItems = false;

  constructor() {}

  logout() {
    this.hasItems = !this.hasItems;
    console.log('User logged out!');
  }
}
