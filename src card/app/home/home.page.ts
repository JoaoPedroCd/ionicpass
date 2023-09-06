import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl:NavController) {}


  exibirBaixo(){
    this.navCtrl.navigateForward('baixo')
  }

  exibirBateria(){
    this.navCtrl.navigateForward('bateria')
  }

  exibirGuitarra(){
    this.navCtrl.navigateForward('guitarra')
  }

  exibirPedal(){
    this.navCtrl.navigateForward('pedal')
  }

}
