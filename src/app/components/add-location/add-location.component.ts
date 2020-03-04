import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { autocompleteResult, savedLocation } from 'src/app/app.models';
import { debounceTime } from 'rxjs/operators';
import { LocationSearchService } from 'src/app/services/location-search.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  searchText: string;
  searchTextChanges: Subject<string> = new Subject<string>();
  searchResults: autocompleteResult[] = [];
  searching: boolean = false;

  @Output() onSearchResultSelected: EventEmitter<savedLocation> = new EventEmitter();

  constructor(private locationSearchService: LocationSearchService) { }

  ngOnInit(): void {
    this.debounceSearchText();
  }

  onSearchTextChange(text: string): void {
    this.searchTextChanges.next(text);
  }

  debounceSearchText(): void {
    this.searchTextChanges
      .pipe(debounceTime(400))
      .subscribe(text => {
        this.searchText = text;

        if(this.searchText) {
          this.locationSearchService.getLocation(this.searchText).subscribe((results: autocompleteResult[]) => {
            this.searchResults = results;
          });
          this.searching = true;
        } else {
          this.clearSearchResults();
        }
      });
  }
  
  clearSearchResults(): void {
    this.searchText = null;
    this.searchResults = [];
    this.searching = false;
  }

  removeSelectedLocationFromResults(location: autocompleteResult) {
    let index = this.searchResults.indexOf(location);
    this.searchResults.splice(index, 1);
  }

  saveLocation(location: autocompleteResult) {
    this.removeSelectedLocationFromResults(location);
    
    let newLocation = this.formatLocationToSave(location);
    let localStorageData = [];

		if(localStorage.getItem('wd') !== null) {
			localStorageData = JSON.parse(localStorage.getItem('wd'));
		}

		localStorageData.push(newLocation);
		localStorage.setItem('wd', JSON.stringify(localStorageData));
    this.onSearchResultSelected.emit(newLocation);
  }

  formatLocationToSave(location: autocompleteResult): savedLocation {
    return {
			key: location.Key,
      city: location.LocalizedName,
			administrativeArea: location.AdministrativeArea.LocalizedName,
			country: location.Country.LocalizedName,
			forecast: true
		};
  }
}
