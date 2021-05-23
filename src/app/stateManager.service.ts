import { Injectable } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Restaurant} from './shared/models';

@Injectable({
  providedIn: 'root'
})

export class StateManagerService {
  isLogged: boolean;
  hasSeat: boolean;
  restaurant: Restaurant;
  elem = 2;

  constructor( private platform: Platform) {}

  isBrowser() {
    return (this.platform.is('mobileweb') || this.platform.is('desktop') );
  }

  setRestaurantInfo(r: Restaurant) {
    this.restaurant = Object.create(r);
    this.hasSeat = true;
  }
}
