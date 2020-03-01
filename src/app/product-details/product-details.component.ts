import { Component, OnInit } from '@angular/core';
import {products}  from '../products';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product; 

  constructor(
    private route : ActivatedRoute,
  ) { }

  ngOnInit() {
    //parte liosa de comprender. copiar y pegar. punto!
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    })
  }

}
