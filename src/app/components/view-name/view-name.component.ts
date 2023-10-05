import { Component, OnInit } from '@angular/core';
// auth service
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-view-name',
  templateUrl: './view-name.component.html',
  styleUrls: ['./view-name.component.scss']
})
export class ViewNameComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
