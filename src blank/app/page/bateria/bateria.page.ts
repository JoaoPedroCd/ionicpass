import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.page.html',
  styleUrls: ['./bateria.page.scss'],
})
export class BateriaPage implements OnInit {
  url:any;
  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'http://pt.wikipedia.org/wiki/Bateria'
    )
  }

}
