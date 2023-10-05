import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonalDetails } from "../../models/personal-details.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // create a form group using the personal details data model
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/),
    ]),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    confirmPassword: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.isLoggedin()) {
      this.router.navigate(['/user/profile']);
      this.authService.openSnackBar('You are already logged in');
    }
  }

  isLoggedin() {
    return this.authService.getLoggedInUser() !== null;
  }

  // register user
  register() {

    //check if the form is valid
    if (this.registerForm.invalid) {
      this.authService.openSnackBar('Please fill in all the required fields');
      return;
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.authService.openSnackBar('Passwords do not match');
      //make input fields red
      this.registerForm.controls['password'].setErrors({ 'incorrect': true });
      this.registerForm.controls['confirmPassword'].setErrors({ 'incorrect': true });
      return;
    }

    // create a new personal details object using the form values
    const personalDetails: PersonalDetails = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      id: 0,
      IDnumber: '',
      phone: 0,
      countryCode: 0,
      gender: '',
      maritalStatus: '',
      address: {
        line1: '',
        line2: '',
        line3: '',
        suburb: '',
        city: '',
        postalCode: 0,
        country: ''
      }
    }
    // call the register method in the auth service
    this.authService.registerUser(personalDetails).subscribe((res) => {
      console.log(res);
      this.authService.openSnackBar('User registered successfully');
      this.router.navigate(['auth/login']);

    }, err => {
      console.log(err);
      this.authService.openSnackBar('An error occurred');
    })
  }
  

}
