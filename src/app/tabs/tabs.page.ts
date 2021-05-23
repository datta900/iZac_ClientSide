import { Component } from '@angular/core';
import { StateManagerService } from '../stateManager.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  hasItems = false;
  hideTabs = false;

  constructor(public state: StateManagerService) { }

  logout() {
    this.hasItems = !this.hasItems;
    console.log('User logged out!');
  }
}
