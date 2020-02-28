import { Component } from '@angular/core';
// para poder importar los productos en el componente, hemos creado
// un archivo products.ts y lo importamos con un import
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // para poder acceder a los elementos de product, debemos definirlo 
  // y darle un nombre para poder manipularlo. 
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/