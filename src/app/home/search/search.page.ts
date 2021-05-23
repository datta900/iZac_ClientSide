import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../../stateManager.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  promo: false;
  constructor(public state: StateManagerService) { }

  ngOnInit() {
  }

}
