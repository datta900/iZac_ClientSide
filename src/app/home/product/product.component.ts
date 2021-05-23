import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
  <ion-row class="list-element">
    <ion-col size="1"> + </ion-col>
    <ion-col size="9">
      <ion-text> {{ name }}</ion-text>
      <ion-text> {{ description }}</ion-text>
    </ion-col>
    <ion-col size="2"> {{ price }} </ion-col>
  </ion-row>

	<ion-item>
		<ion-col size="1"> + </ion-col>
		<ion-col size="9">
			<ion-text> {{ name }}</ion-text>
			<ion-label> {{ description }}</ion-label>
		</ion-col>
		<ion-col size="2"> {{ price }} </ion-col>
	</ion-item>
  `,
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() price: string;
  @Input() bioFlag: boolean;
  @Input() veganFlag: boolean;
  @Input() glutenFreeFlag: boolean;
  @Input() discountPerc: number;
  @Input() discountPrice: string;
  quantity: number;

  constructor() { }

  ngOnInit() {}

}
