import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PropertyServicesService } from 'src/utils/Services/property-services.service';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent {
  protected propertyService: PropertyServicesService = inject(PropertyServicesService);
  applyForm !: FormGroup;
  constructor() {
    this.applyForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl("")
    })
  }

  formSubmitEvent() {
    this.propertyService.postAppliedForm(this.applyForm.value.firstName, this.applyForm.value.lastName, this.applyForm.value.email);
  }

}
