import { Injectable } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService 
{
  // Observable
  numbers$ = of(5,6,7,8)
  numbers2$ = of(1,2,6,5)
  numbers3$ = of(8,9,4,7,3,65,34,8,3,2,31,26)
  
  //arrow Fucntion (Observer)
  action  = (value:number)=>console.log(value)

  actions  = {
    next: (value:number)=>console.log(value),
    error:(e:Error) => console.error(e),
    complete:()=>console.info("All Values are printed on console....")
  }

  evenopr = filter((value:number)=>value%2==0)
  sqopr = map((value:number)=>value**2)

  constructor() 
  {
    //Subscription
    //this.numbers$.subscribe(this.actions)
    //this.numbers2$.subscribe(this.action)
    this.numbers3$.pipe(this.evenopr,this.sqopr).subscribe(this.actions)
  }
}
