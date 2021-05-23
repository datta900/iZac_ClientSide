import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  template: `
    <ion-content>
      <ion-grid class="container">
        <div class="ion-text-center">
					<!--<img [src]="logoUrl" onerror="this.onerror=null; this.src='../../assets/icon/logo.png'" alt="logo" height="150">&ndash;&gt;-->
					<img [src]="logoUrl" alt="logo" height="150">
					<p><strong> Benvenuto a {{businessName}}!</strong></p>
					<p> Enjoy iZac experience.</p>
        </div>
      </ion-grid>
    </ion-content>
  `,
  styleUrls: ['./seat-selection.page.scss'],
})
export class WelcomeComponent implements OnInit {
  @Input() businessName: string;
  @Input() logoUrl: string;

  constructor(private modalController: ModalController) { }

  ngOnInit(): void {
    // setTimeout(() => { this.modalController.dismiss(); }, 2000);
  }
}
