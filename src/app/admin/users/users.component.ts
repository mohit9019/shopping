import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Users';
import {AuthService} from '../../services/auth.service' 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users?:Users[]
  constructor(private userData:AuthService) { 
    this.users=this.userData.user;
  }
  ngOnInit(): void {
  }

}
