import { Component } from '@angular/core';
import { RxjsService } from './myservices/rxjs.service';

@Component({
  selector: 'app-mystore',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mystore';
  constructor(private rxjs:RxjsService){}
}
