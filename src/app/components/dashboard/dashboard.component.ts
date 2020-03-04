import { Component, OnInit } from '@angular/core';
import { savedLocation, currentConditions, twelveHourForecast } from '../../app.models';
import { LocationSearchService } from '../../services/location-search.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  savedLocations: savedLocation[] = [];
  currentConditions: currentConditions[][];
  forecastData: twelveHourForecast[][];

  constructor(private locationSearchService: LocationSearchService) {
    this.savedLocations = JSON.parse(localStorage.getItem('wd'));
  }

  ngOnInit(): void {
    this.getCurrentConditions();
    this.getTwelveHourForecast();
  }

  getCurrentConditions(): void {
    let requests = this.savedLocations.map((location: savedLocation) => {
      return this.locationSearchService.getCurrent(location.key);
    });

    forkJoin(requests).subscribe((results: currentConditions[][]) => {
      this.currentConditions = results;
    });
  }

  getTwelveHourForecast(): void {
    let requests = this.savedLocations.map((location: savedLocation) => {
      return this.locationSearchService.getForecast(location.key);
    });

    forkJoin(requests).subscribe((results: twelveHourForecast[][]) => {
      this.forecastData = results;
    });
  }
}
