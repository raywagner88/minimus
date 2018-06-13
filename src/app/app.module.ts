import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { DetailsComponent } from './details/details.component';
import { UiService } from './ui.service';
import { WeatherService } from './weather.service';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    AddCardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UiService,
    WeatherService,
    Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
