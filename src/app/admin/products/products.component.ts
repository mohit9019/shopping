import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Items';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Items[]
  constructor(private items:ItemsService) { 
    this.products=this.items.items;
  }
  onDelete(item:Items){
    const i= this.products.indexOf(item);
    this.products.splice(i,1);
  }
  ngOnInit(): void {
  }

}
