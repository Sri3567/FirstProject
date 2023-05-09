import { Component } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  searchQuery1:string="Shashank"

  change(event:any)
  {
    this.searchQuery1 =event.target.value
  }

  _searchQuery2:string="ITVedant"

  set searchQuery2(value:string){
    this._searchQuery2=value
  }
  get searchQuery2(){
    return this._searchQuery2
  }
}
