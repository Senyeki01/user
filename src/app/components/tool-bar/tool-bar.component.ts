import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
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
