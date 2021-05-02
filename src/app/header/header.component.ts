import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button autoHide="false" slot="icon-only"></ion-menu-button>
        </ion-buttons>
        <ion-title class="ion-text-center">
          <img alt="logo" height="60" [src]="urlImg">
        </ion-title>
        <ion-buttons slot="end">
          <ion-avatar>
            <div style="width: 45px; height: 45px; border: 1px solid black; border-radius: 30%; background-color: blue"></div>
          </ion-avatar>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  `,
  styles: ['.sc-ion-buttons-ios-s ion-button {height: none !important;}'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  logo = '../../assets/icon/logo.png';
  urlImg = 'https://loghi-famosi.com/wp-content/uploads/2020/09/Starbucks-Logo.png';
  constructor() { }

  ngOnInit() {}

}
