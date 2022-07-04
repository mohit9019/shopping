import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(){
    console.log('home')
  }
  ngOnInit(): void {
  }

}
