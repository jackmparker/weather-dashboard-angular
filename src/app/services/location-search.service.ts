import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationSearchService {

  constructor(private http: HttpClient) { }

	getLocation(query: string) {
		return this.http.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=0nP9GmS7wqLj3LgOfvA6IxzacxoAgR7y&q=' + query);
	}

	getCurrent(key: string) {
		return this.http.get('https://dataservice.accuweather.com/currentconditions/v1/' + key + '?apikey=0nP9GmS7wqLj3LgOfvA6IxzacxoAgR7y');
	}

	getForecast(key: string) {
		return this.http.get('https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + key + '?apikey=0nP9GmS7wqLj3LgOfvA6IxzacxoAgR7y');
	}
}