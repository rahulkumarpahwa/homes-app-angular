import { Component } from '@angular/core';
import { PropertyCard } from '../../utils/Interfaces/property-card';
import { PropertyCardList } from '../../utils/Services/property.service';

@Component({
  selector: 'app-property-card-box',
  templateUrl: './property-card-box.component.html',
  styleUrls: ['./property-card-box.component.css'],
})
export class PropertyCardBoxComponent {
    protected propertyCardList : PropertyCard[] = [];

    constructor(propertyCardL : PropertyCardList){
      this.propertyCardList = propertyCardL;
    }
}
