import { Component, OnInit } from '@angular/core';
//importamos Input para recibir como el componente product-list
// y con cada product, manipularlo y realizar una acción de alerta
import {Input, Output, EventEmitter} from '@angular/core'


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // aquí decoramos product con @Input para recibir el product
  @Input() product; 
  @Output() notify = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

}
