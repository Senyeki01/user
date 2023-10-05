import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PersonalDetails } from '../../models/personal-details.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    if(this.isLoggedin()) {
      this.router.navigate(['/user/profile']);
      this.authService.openSnackBar('You are already logged in');
    }
  }

  isLoggedin() {
    return this.authService.getLoggedInUser() !== null;
  }

  login(username: string, password: string) {
    this.authService.getUserByEmail(username,password).subscribe((res) => {
      if (res) {
        this.authService.openSnackBar('Login successful');
        this.router.navigate(['/user/profile']);
      } else {
        this.authService.openSnackBar('Login failed');
      }
  })
}

}
