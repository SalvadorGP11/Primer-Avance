import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { LoginComponent } from './modules/login/login.component';
import { RoomsComponent } from './modules/rooms/rooms.component';
import { ExploreComponent } from './modules/explore/explore.component';
import { RestaurantComponent } from './modules/restaurant/restaurant.component';
import { BookComponent } from './modules/book/book.component';
import { ReservationsComponent } from './modules/reservations/reservations.component';
import { TableReservedComponent } from './modules/reservations/table-reserved/table-reserved.component';
const routes: Routes = [
  {path: '',
  component: DefaultComponent,
  children: [{
    path: '', 
    component: HomeComponent
  },{
    path: 'about',
    component: AboutComponent
  },{
    path: 'login',
    component: LoginComponent
  },{
    path: 'rooms',
    component: RoomsComponent
  },{
    path: 'explore',
    component: ExploreComponent
  }
  ,{
    path: 'restaurant',
    component: RestaurantComponent
  }
  ,{
    path: 'book',
    component: BookComponent
  }
  ,{
    path: 'reservations/:nombre',
    component: ReservationsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
