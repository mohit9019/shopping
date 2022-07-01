import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../Items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: Items[];
  imgpath?: string;
  price?: number;
  type?: string;
  is_cart?: boolean;
  cart: number=0;
  constructor(private route:Router) {
    this.items = [
      {
        id:0,
        imgpath: './assets/images/j1.jpg',
        price: 1000,
        type: 'jacket',
        is_cart: false
      },
      {
        id:1,
        imgpath: './assets/images/j2.jfif',
        price: 200,
        type: 'jacket',
        is_cart: false
      },
      {
        id:2,
        imgpath: './assets/images/j3.jfif',
        price: 250,
        type: 'jacket',
        is_cart: false
      },
      {
        id:3,
        imgpath: './assets/images/je1.jpg',
        price: 800,
        type: 'jeans',
        is_cart: false
      },
      {
        id:4,
        imgpath: './assets/images/s1.jpg',
        price: 500,
        type: 'shirt',
        is_cart: false
      },
      {
        id:5,
        imgpath: './assets/images/s2.jfif',
        price: 700,
        type: 'shirt',
        is_cart: false
      },
      {
        id:6,
        imgpath: './assets/images/s3.jfif',
        price: 700,
        type: 'shirt',
        is_cart: false
      },
      {
        id:7,
        imgpath: './assets/images/je2.webp',
        price: 700,
        type: 'jeans',
        is_cart: false
      },
      {
        id:8,
        imgpath: './assets/images/s4.jfif',
        price: 700,
        type: 'shirt',
        is_cart: false
      },
      {
        id:9,
        imgpath: './assets/images/je3.jpg',
        price: 700,
        type: 'jeans',
        is_cart: false
      },
      {
        id:10,
        imgpath: './assets/images/s1.jpg',
        price: 500,
        type: 'shirt',
        is_cart: false
      },
    ];
  }

  addItem(img:string,pr:number,type:string){
    const ind={
      id:this.items.length,
      imgpath:img,
      price:pr,
      type:type,
      is_cart:false
    }
    this.items.push(ind);
    alert('New Item added to products');
    this.route.navigate(['/admin/products'])
  }
  removeCart(item:Items){
    const i = this.items.indexOf(item)
    this.items[i].is_cart=false;
  }
  addCart(i: number) {
    this.items[i].is_cart = true;
  }
  cartStrength(){
    const i=this.items.filter(e=>{
      return e.is_cart===true
    }).length

    return i;
  }

}
