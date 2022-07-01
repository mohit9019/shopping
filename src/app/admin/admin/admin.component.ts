import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Items';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    image:string=""
    price:number=0
    type:string=""
    item:Items={}
  imagepath:string=""
  constructor(private items:ItemsService) {
  }
  
  ngOnInit(): void {
  }
  onSubmit(){
    this.imagepath=this.image.replace("C:\\fakepath\\","./assets/images/");
    this.items.addItem(this.imagepath,this.price=+this.price,this.type);
  }

}
