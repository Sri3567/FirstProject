import { Component, Input, OnInit } from '@angular/core';
import { ProductReview } from './product-review.model';
import { ProductService } from '../myservices/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-review-form',
  templateUrl: './product-review-form.component.html',
  styleUrls: ['./product-review-form.component.css']
})
export class ProductReviewFormComponent implements OnInit
{
 
  constructor(private pService:ProductService,private router:Router){}
  productreview = new ProductReview() 
  
  @Input() pId!:number

  ngOnInit(): void {
    this.productreview.productId = this.pId
  }
  

  onSubmit(){
    console.log(this.productreview)
    this.pService.addReview(this.productreview).subscribe(proReview=>{
      alert(`Review is added Successfully.. review Id is ${proReview.id}`)
      this.router.navigate(['/product','list'])
     
    })
  }
}
