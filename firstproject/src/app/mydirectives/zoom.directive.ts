import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  @Input() defaultSize:string=''
  @Input() appZoom:string =''

  constructor(private el:ElementRef)
  {
    this.el.nativeElement.style.fontSize=this.defaultSize
  }

  @HostListener("mouseover")
  ZoomIn()
  {
    this.el.nativeElement.style.fontSize=this.appZoom
  }
  @HostListener("mouseleave")
  ZoomOut()
  {
    this.el.nativeElement.style.fontSize=this.defaultSize
  }

}
