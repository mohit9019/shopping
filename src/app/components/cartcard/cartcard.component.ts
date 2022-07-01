import { AfterContentChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Items } from 'src/app/Items';
import { ItemlistComponent } from '../itemlist/itemlist.component';

@Component({
  selector: 'app-cartcard',
  templateUrl: './cartcard.component.html',
  styleUrls: ['./cartcard.component.css']
})
export class CartcardComponent implements OnInit, AfterContentChecked {
  carts:Items[];
  checkout:number=0
  constructor(private cart:ItemsService) { 
    this.carts=[];
  }
  ngOnInit(): void {
    this.carts=this.cart.items.filter(e=>{
      if(e.is_cart===true && e.price!=null && e.price!=undefined){this.checkout+=e.price}
        return e.is_cart===true;
    })
  }
  onClick(item:Items){
    const i=this.carts.indexOf(item);
    this.cart.removeCart(item);
    if(item.price!=null && item.price!=undefined){this.checkout-=item.price}
    this.carts.splice(i,1)
  }
  ngAfterContentChecked(): void {
  }

}
