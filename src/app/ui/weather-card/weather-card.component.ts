import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather/weather.service';
import { UiService } from '../../services/ui/ui.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit, OnDestroy {
  darkMode: boolean;
  condition: string;
  currentTemp: number;
  minTemp: number;
  maxTemp: number;

  constructor(
    public weather: WeatherService,
    public ui: UiService,
    public router: Router
  ) { }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

  this.weather.getWeatherState('Paris')
    .subscribe((data: string) => {
      this.condition = data;
    });

  this.weather.getCurrentTemp('Paris')
    .subscribe((data: number) => {
      this.currentTemp = data;
    });

  this.weather.getMinTemp('Paris')
    .subscribe((data: number) => {
      this.minTemp = data;
    });

  this.weather.getMaxTemp('Paris')
    .subscribe((data: number) => {
      this.maxTemp = data;
    });

  }

  ngOnDestroy() {

  }

  openDetails() {
    this.router.navigateByUrl('/details/paris');
  }


}
