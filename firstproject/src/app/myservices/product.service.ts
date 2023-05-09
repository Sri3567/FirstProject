import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductReview } from '../product-review-form/product-review.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  myname:string="Shashank M."


  cartCounter:number=0
  // here it is a observable which mantain the value cartCounter
  cartCounter$ = new BehaviorSubject<number>(this.cartCounter)

  increaseCartCounter(){
    this.cartCounter++
    this.cartCounter$.next(this.cartCounter)
    console.log(this.cartCounter)
  }
  getCartCounter():Observable<number>
  {
    return this.cartCounter$
  }

  apiURL:string = "http://localhost:3000/products" 
  apiReviewURL:string = "http://localhost:3000/productreviews" 
  
  getProductList():Observable<Product[]>{
    
    return this.http.get<Product[]>(this.apiURL)
  }

  deleteProduct(id:number){
    
    return this.http.delete(`${this.apiURL}/${id}`)
  }

  getProductById(id:number){
    return this.http.get<Product>(`${this.apiURL}/${id}`)
  }

  constructor(private http:HttpClient) 
  {
    console.log("Service Created.......")
  }

  addReview(productReview:ProductReview){
    return this.http.post<ProductReview>(this.apiReviewURL,productReview)
  }

}
