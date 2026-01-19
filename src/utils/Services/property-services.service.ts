import { Injectable } from '@angular/core';
import { PropertyCard } from '../Interfaces/property-card';

@Injectable({
  providedIn: 'root'
})
export class PropertyServicesService {
  protected url = "http://localhost:3000";
  constructor() {

  }
  async getPropertyList(): Promise<PropertyCard[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    console.log(data);
    return data?.properties || [];
  }
  async getPropertyById(id: number): Promise<PropertyCard | undefined> {
    const response = await fetch(this.url + "/" + id);
    const data = await response.json();
    console.log(data);
    return data?.property|| {};
    // return this.propertyList.find(property => property.id == id);
  }

  postAppliedForm(firstName: String, lastName: String, email: String): undefined {
    console.log("Name : " + firstName + " " + lastName + " \n" + "Email : " + email);
  }
}
