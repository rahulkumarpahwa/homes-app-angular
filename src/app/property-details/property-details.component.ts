import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  public propertyId : number = 0;
  constructor(){
    this.propertyId = Number(this.route.snapshot.params['id']);
  }
}
