import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { Items } from 'src/app/Items';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  preview?:Items[]
  id?:number
  constructor(private items:ItemsService, private route:ActivatedRoute) { 
    this.preview=this.items.items;
  }

  ngOnInit(): void {
  }

}
