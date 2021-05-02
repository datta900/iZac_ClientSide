import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.page.html',
  styleUrls: ['./seat-selection.page.scss'],
})
export class SeatSelectionPage implements OnInit {
  qrImage = '../../assets/image/qrcode.png';
  numImage = '../../assets/image/num-code.png';

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  scanQrCode() {
    // TODO
    console.log('Start QR scanner');
    this.navCtrl.setDirection('root');
    this.router.navigateByUrl('/tabs', {replaceUrl: true});
  }

  enterCode() {
    // TODO
    console.log('Go to num page');
  }
}
