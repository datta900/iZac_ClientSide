import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StateManagerService} from '../stateManager.service';

@Component({
  selector: 'app-header',
  template: `
		<ion-header class="ion-no-border">
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button autoHide="false" slot="icon-only"></ion-menu-button>
				</ion-buttons>
				<ion-title class="ion-text-center">
					<img alt="logo" height="60" [src]="logo">
				</ion-title>
				<ion-buttons slot="end" style="min-width: 40px">
          <ion-icon *ngIf="state.hasSeat" name="person" class="icon-avatar"></ion-icon>
					<!--<ion-avatar>
						<div *ngIf="state.isLogged"></div>
						<img *ngIf="!state.isLogged" class="ionicon" src="/svg/person-circle-outline.svg" color="primary">
					</ion-avatar>-->
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
  `,
  styles: [`
		.icon-avatar {
      padding: 3px;
			height: 35px;
			width: 35px;
      margin-right: 3px;
			background-color: #1e2e40;
			color: white;
			border: 1px solid;
			border-radius: 10px;
		}
  `],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  logo = '../../assets/icon/logo.png';
  urlImg = 'https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-png-transparent.png';

  constructor(public state: StateManagerService) {
  }

  ngOnInit() {
  }

}
