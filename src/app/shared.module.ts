import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SideMenuComponent } from './side-menu/side-menu.component';
import {HeaderComponent} from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    SideMenuComponent,
    HeaderComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideMenuComponent,
    HeaderComponent
  ]
})
export class SharedModule {}
