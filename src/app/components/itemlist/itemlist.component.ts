import { AfterContentChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import {Items} from '../../Items';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit, AfterContentChecked {
  items:Items[];
  carts:number=0
  selected:string="all"
  constructor(private item:ItemsService){
    this.items=this.item.items;
  }
  onClick(item:Items){
    const i=this.items.indexOf(item);
    this.item.addCart(i);
    this.carts=this.item.cartStrength()
    alert('item added to cart');
  }
  onChange(event:any){
    this.selected=event.target.value;
  }
  ngOnInit(): void { 
  }
  ngAfterContentChecked(): void {
      if(this.selected==='all' || this.items===[]){
        this.items=this.item.items;
      }
      else{
        this.items=this.item.items.filter(e=>{
          return e.type===this.selected;
        })
      }
  }

}
