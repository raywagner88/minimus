import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { AddCardComponent } from './ui/add-card/add-card.component';
import { WeatherCardComponent } from './ui/weather-card/weather-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:city', component: DetailsComponent },
  { path: 'add', component: AddCardComponent},
  { path: 'weatherCard', component: WeatherCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
