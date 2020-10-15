import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import {Album} from '../album';

import {productService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
