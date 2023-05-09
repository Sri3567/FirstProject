import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../myservices/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent
{
  id!:number
  product$!:Observable<Product>
  
  /*
    ActivatedRoute is built-in service of RouterModule of angular.
    It is used fetch the data from url.
   */
  constructor(private route:ActivatedRoute,private pService:ProductService){
    this.id = Number(this.route.snapshot.paramMap.get("id"))

    if(this.id){
      this.product$ = this.pService.getProductById(this.id)
    }
  }


}
