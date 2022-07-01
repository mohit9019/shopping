import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterContentChecked{
  cartitem:number=0;
  constructor(private item:ItemsService) {
  }
  ngOnInit(): void {
  }
  ngAfterContentChecked(): void {
    this.cartitem=this.item.cartStrength();
  }
}
