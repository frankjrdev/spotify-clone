import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handlerError(): void {
    const elementNative = this.elHost.nativeElement;
    console.log('La imagen revento ----->', this.elHost);
    elementNative.src = 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt79d3841ed4102a80/60dbecb8fd14d30f3eaeef4a/2329eb3d722e9c8f301f8c51db4094624e80d3ed.jpg';

  }

  constructor(private elHost: ElementRef) { }

}
