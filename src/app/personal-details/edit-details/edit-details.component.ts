import { Component, OnInit } from '@angular/core';
import { PersonalDetails } from '../../models/personal-details.model';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {

  editDetailsForm!: FormGroup;
  name = '';

  //edit flag using behaviour subject
  editMode$ = new BehaviorSubject<string>('locked');
  
 
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // get the user data from local storage
    const userData = this.authService.getLoggedInUser();

    if(userData){
        // create a form group using the personal details data model
        this.editDetailsForm = new FormGroup({
          id: new FormControl(userData.id),
          firstName: new FormControl(userData.firstName),
          lastName: new FormControl(userData.lastName),
          email: new FormControl(userData.email, [
            Validators.required,
            Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/),
          ]),
          Idnumber: new FormControl(userData.IDnumber),
          phone: new FormControl(userData.phone),
          countryCode: new FormControl(userData.countryCode),
          gender: new FormControl(userData.gender),
          maritalStatus: new FormControl(userData.maritalStatus),
          address: new FormGroup({
            line1: new FormControl(userData.address.line1),
            line2: new FormControl(userData.address.line2),
            line3: new FormControl(userData.address.line3),
            suburb: new FormControl(userData.address.suburb),
            city: new FormControl(userData.address.city),
            postalCode: new FormControl(userData.address.postalCode),
            country: new FormControl(userData.address.country),
          }),
        });

        this.name = userData.firstName + ' ' + userData.lastName;
    }

    this.cancelEdit();

  }


  editDetails() {
    // enable the form controls
    this.editDetailsForm.enable();
    this.editMode$.next('edit');

  }

  updateDetails() {
    // update the user details
    this.authService.storeUserData(this.editDetailsForm.value as PersonalDetails);
    this.message('Details updated successfully');
    this.cancelEdit();
  }

  cancelEdit() {

    // disable the form controls
    this.editDetailsForm.disable();
    this.editMode$.next('locked');
  }

  message(text: string) {
    this.authService.openSnackBar(text);
  }

}
