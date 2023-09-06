import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-baixo',
  templateUrl: './baixo.page.html',
  styleUrls: ['./baixo.page.scss'],
})
export class BaixoPage implements OnInit {

  url:any;

  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'http://pt.wikipedia.org/wiki/Baixo'
    )
  }

}
