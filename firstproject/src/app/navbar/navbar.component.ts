import { Component } from "@angular/core";
import { ProductService } from "../myservices/product.service";
import { Observable } from "rxjs";

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})
export class NavbarComponent
{
    count!:number
    count$!:Observable<number>

    constructor(private pservice:ProductService){
    console.log("Navbar is Created....")
    console.log(pservice.myname)
    this.count$ = pservice.getCartCounter();
    this.count$.subscribe({
      next:(value:number)=>this.count=value
    })
  }

  
}