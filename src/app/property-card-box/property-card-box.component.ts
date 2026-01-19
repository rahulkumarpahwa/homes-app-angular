import { Component } from '@angular/core';
import { PropertyCard } from '../../utils/Interfaces/property-card';
import { PropertyServicesService } from 'src/utils/Services/property-services.service';

@Component({
  selector: 'app-property-card-box',
  templateUrl: './property-card-box.component.html',
  styleUrls: ['./property-card-box.component.css'],
})
export class PropertyCardBoxComponent {
  propertyCardList: PropertyCard[] = [];
  constructor(propertyService: PropertyServicesService) {
    console.log(this.propertyCardList);
    propertyService.getPropertyList().then((propertyCardLt: PropertyCard[]) => (this.propertyCardList = propertyCardLt));
  }
}
