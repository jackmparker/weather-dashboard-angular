import { Component, Input } from '@angular/core';
import { savedLocation, currentConditions, twelveHourForecast } from 'src/app/app.models';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() location: savedLocation;
  @Input() conditions: currentConditions;
  @Input() forecast: twelveHourForecast;

  getWeatherIcon(location: currentConditions|twelveHourForecast): string {
    return `assets/images/weather-icons/${location.WeatherIcon}.png`
  }
}
