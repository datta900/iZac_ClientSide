import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared.module';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SearchPage } from './search/search.page';
import {ProductComponent} from './product/product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    SearchPage,
    ProductComponent
  ]
})
export class HomePageModule {}
