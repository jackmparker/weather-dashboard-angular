import { Component, Output, EventEmitter, Input } from '@angular/core';
import { savedLocation } from 'src/app/app.models';

@Component({
  selector: 'saved-locations',
  templateUrl: './saved-locations.component.html',
  styleUrls: ['./saved-locations.component.scss']
})
export class SavedLocationsComponent {

  @Input() savedLocations: savedLocation[];
  @Output() onDeleteLocation: EventEmitter<savedLocation> = new EventEmitter();

  onShowForecastClicked(checked: boolean, location: savedLocation) {
		let storage = JSON.parse(localStorage.getItem('wd'));

    storage.forEach((item: savedLocation) => {
      if(item.key === location.key) {
        item.forecast = checked;
      }
    });

		localStorage.setItem('wd', JSON.stringify(storage));
	}
}
