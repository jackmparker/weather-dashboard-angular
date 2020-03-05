import { Component, OnInit } from '@angular/core';
import { savedLocation } from '../../app.models';

@Component({
  selector: 'manage-locations',
  templateUrl: './manage-locations.component.html',
  styleUrls: ['./manage-locations.component.scss']
})
export class ManageLocationsComponent implements OnInit {
  
  savedLocations: savedLocation[];

  ngOnInit(): void {
    this.savedLocations = JSON.parse(localStorage.getItem('wd')) || [];
  }

  deleteLocation(location: savedLocation) {
		let storage = JSON.parse(localStorage.getItem('wd'));
		this.savedLocations = storage.filter((item: savedLocation) => item.key !== location.key);
		localStorage.setItem('wd', JSON.stringify(this.savedLocations));
	}

  addToSavedLocations(location: savedLocation) {
    this.savedLocations.push(location);
  }
}
