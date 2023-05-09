import { Component } from '@angular/core';
import { ProductService } from '../myservices/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private pservice:ProductService)
  {
    console.log("Header is Created....")
    console.log(pservice.myname)
  }

}
