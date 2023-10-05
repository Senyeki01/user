import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  menuItems = [
    {
      name: 'Profile',
      icon: 'person',
      link: 'user/profile'
    },
    {
      name: 'About Us',
      icon: 'info_outline',
      link: 'about-us'
    },
    {
      name: 'Contact Us',
      icon: 'call',
      link: 'contact-us'
    },
    {
      name: 'Log Out',
      icon: 'input',
      link: 'log-out'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
