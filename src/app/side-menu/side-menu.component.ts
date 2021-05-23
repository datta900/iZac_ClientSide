import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../stateManager.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(public state: StateManagerService) { }

  ngOnInit() {}
}
