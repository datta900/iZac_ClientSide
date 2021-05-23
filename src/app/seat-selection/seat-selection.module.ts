import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared.module';
import { SeatSelectionPageRoutingModule } from './seat-selection-routing.module';
import { SeatSelectionPage } from './seat-selection.page';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SeatSelectionPageRoutingModule,
    ZXingScannerModule
  ],
  declarations: [ SeatSelectionPage, WelcomeComponent ],
  providers: [BarcodeScanner]
})
export class SeatSelectionPageModule {}
