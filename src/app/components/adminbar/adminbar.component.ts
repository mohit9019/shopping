import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminbar',
  templateUrl: './adminbar.component.html',
  styleUrls: ['./adminbar.component.css']
})
export class AdminbarComponent implements OnInit {

  constructor(private user:AuthService) { }
  onClick(){
    this.user.isAdmin=false;
  }
  ngOnInit(): void {
  }

}
