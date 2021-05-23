import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SearchPage } from './search/search.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'menu/:category',
        component: SearchPage
      },
      {
        path: 'search/:name',
        component: SearchPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
