import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating!: number;

  @Output() ratingEmitter = new EventEmitter<number>();

  starwidth!: number

  ngOnInit(): void {
    this.starwidth = this.rating * 16.1;
  }

  onClick(){
   this.ratingEmitter.emit(this.rating)
  }

}
