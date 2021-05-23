import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateManagerService } from './stateManager.service';
import { Observable } from 'rxjs';
import { MenuSection } from './shared/models';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private fetchInfoFromQrUrl = 'api/customers/create/booking-seat-without-customer';
  // private getMenuUrl = '/api/menu/retrieve-menu-restaurant';
  private getMenuUrl = '/api/category-menu/retrieve-categories-by-restaurant';

  constructor(private http: HttpClient, public state: StateManagerService) {}

  fetchInfoFromQr(qrCode: string) {
    const req = {codSeat: 1, restaurantId: 1 };
    return this.http.post(this.fetchInfoFromQrUrl, req);
  }

  getMenu(): Observable<MenuSection[]> {
    const req = { restaurantAddress: 'Via Capocchia', restaurantName: 'Capocchia' };
    return this.http.post<MenuSection[]>(this.getMenuUrl, req);
  }
}
