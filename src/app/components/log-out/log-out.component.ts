import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.logOut();
  }

  logOut() {
    localStorage.removeItem('user');
  }

}
