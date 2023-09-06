import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-guitarra',
  templateUrl: './guitarra.page.html',
  styleUrls: ['./guitarra.page.scss'],
})
export class GuitarraPage implements OnInit {
  url:any;
  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'http://pt.wikipedia.org/wiki/Guitarra'
    )
  }


}
