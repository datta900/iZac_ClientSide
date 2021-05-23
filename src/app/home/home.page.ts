import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Category, MenuSection} from '../shared/models';
import { StateManagerService } from '../stateManager.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  menu: MenuSection[];
  sliderOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.5,
  };
  categories: Category[];

  constructor(public state: StateManagerService, private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.api.getMenu().subscribe((resp: MenuSection[]) => {
      this.menu = resp;
      this.categories = this.menu.map( el => {
      return {
        name: el.category,
        image: `../../assets/image/${el.category.toLowerCase()}.jpg`
        };
      });
    });
  }

  goToMenu(category?: string) {
    this.router.navigate([`menu/${category || 'all'}`], { relativeTo: this.route});
  }
}
