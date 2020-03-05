import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationSearchService {

	apiRoot: string = environment.apiRoot;

  constructor(private http: HttpClient) { }

	getLocation(query: string) {
		return this.http.get(this.apiRoot +'/locations/v1/cities/autocomplete?apikey=0nP9GmS7wqLj3LgOfvA6IxzacxoAgR7y&q=' + query);
	}

	getCurrent(key: string) {
		return this.http.get(this.apiRoot +'/currentconditions/v1/' + key + '?apikey=0nP9GmS7wqLj3LgOfvA6IxzacxoAgR7y');
	}

	getForecast(key: string) {
		return this.http.get(this.apiRoot +'/forecasts/v1/hourly/12hour/' + key + '?apikey=0nP9GmS7wqLj3LgOfvA6IxzacxoAgR7y');
	}
}