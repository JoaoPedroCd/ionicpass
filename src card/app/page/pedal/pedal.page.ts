import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
@Component({
  selector: 'app-pedal',
  templateUrl: './pedal.page.html',
  styleUrls: ['./pedal.page.scss'],
})
export class PedalPage implements OnInit {
  url:any;
  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit() {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'http://pt.wikipedia.org/wiki/Pedaleira'
    )
  }
}
