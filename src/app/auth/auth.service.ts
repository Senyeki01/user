import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonalDetails } from '../models/personal-details.model';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/users';
  public name = '';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  registerUser(user: PersonalDetails): Observable<PersonalDetails> {
    return this.http.post<PersonalDetails>(this.apiUrl, user)
    .pipe(tap((newUser: PersonalDetails) => console.log(`added user w/ id=${newUser.firstName}`)));

  }

  getUserByEmail(email: string,password: string): Observable<PersonalDetails | null>  {
    console.log(email);
    return this.http.get<PersonalDetails[]>
    (`${this.apiUrl}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
      .pipe(map((res: PersonalDetails[]) => {
        if (res && res.length > 0) {
          this.storeUserData(res[0]);
          return res[0];
        }else{
          return null;
        }
      }));
  }

  // store user details in local storage to keep user logged in between page refreshes
  storeUserData(user: PersonalDetails) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLoggedIn() {
    return this.getLoggedInUser() ? true : false;
  }
  
  // get logged in user
  getLoggedInUser(): PersonalDetails | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getName(): string {

    const user = this.getLoggedInUser();
    if (user) {
      this.name = user.firstName + ' ' + user.lastName;
    }
    return this.name;
  }

  getUsers(): Observable<PersonalDetails[]> {
    return this.http.get<PersonalDetails[]>(this.apiUrl);
  }

  // show a snackbar message
  openSnackBar(message: string, action: string = 'Close') {

    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
