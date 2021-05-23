import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, AnimationController, ModalController, NavController} from '@ionic/angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {StateManagerService} from '../stateManager.service';
import {ApiService} from '../api.service';
import {WelcomeComponent} from './welcome.component';
import {Restaurant} from '../shared/models';
import {environment} from '../../environments/environment';

const WELCOME_PAGE_TIMEOUT = environment.production ? 4000 : 200;

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.page.html',
  styleUrls: ['./seat-selection.page.scss'],
})
export class SeatSelectionPage implements OnInit {
  webScannerEnabled = false;

  constructor(
  private router: Router,
  private navCtrl: NavController,
  private nativeScanner: BarcodeScanner,
  public state: StateManagerService,
  private api: ApiService,
  private modalController: ModalController,
  private alert: AlertController,
  private animationCtrl: AnimationController
  ) {
  }

  ngOnInit(): void {
    // TODO Da eliminare, solo per test veloce
    if (!environment.production) {
      // setTimeout(() => this.fetchInfoFromQr(null), 500);
    }
  }

  scanQrCode() {
    if (!this.state.isBrowser()) {
      // Run native scanner plugin
      this.runNativeScanner();
    } else {
      // Enable web scanner plugin
      this.webScannerEnabled = true;
    }
  }

  runNativeScanner() {
    this.nativeScanner.scan().then(
    qrCode => {
      this.fetchInfoFromQr(qrCode.text);
    },
    err => {
      this.scanErrorHandler(err);
    }
    );
  }

  scanSuccessHandler(event: string) {
    this.webScannerEnabled = !this.webScannerEnabled;
    this.fetchInfoFromQr(event);
  }

  scanErrorHandler(error) {
    console.log(error);
  }

  fetchInfoFromQr(qrCode: string) {
    this.api.fetchInfoFromQr(qrCode).subscribe(
    (info: Restaurant) => {
      info = {name: 'Test 1', address: 'Via Test 1', id: '1', logo: ''};
      this.state.setRestaurantInfo(info);
      this.presentModal({name: info.name, logo: info.logo});
      this.showWelcomePageAndGoToHome();
    },
    error => {
      this.presentAlert();
    });
  }

  enterCode() {
    // TODO
    this.fetchInfoFromQr(null);
  }

  presentModal(props) {
    this.modalController.create({
      component: WelcomeComponent,
      leaveAnimation: baseEl => {
        return this.animationCtrl.create()
        .addElement(baseEl)
        .duration(300)
        .fromTo('transform', 'translateX(0%)', 'translateX(-100%)');
      },
      componentProps: {
        businessName: props.name || '',
        logoUrl: props.logo || '../../assets/icon/logo.png'
      }
    }).then(modal => modal.present());
  }

  presentAlert() {
    this.alert.create({
      header: 'Attenzione',
      message: 'Sedia già occupata',
      buttons: ['OK']
    }).then( alert => alert.present());
  }

  showWelcomePageAndGoToHome() {
    /** There are two different timeouts so that the user can see only the modal animation */
    setTimeout( () => { this.router.navigate(['/tabs'], {replaceUrl: true}); }, 500);
    setTimeout( () => { this.modalController.dismiss().then(); }, WELCOME_PAGE_TIMEOUT);
  }
}
