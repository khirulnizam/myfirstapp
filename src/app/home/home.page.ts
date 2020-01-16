import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navctrl:NavController) {}

  //function helloword
  helloworld(nama, namaayah){
  	alert("Hello geng "+nama +" "+ namaayah);
  }//end helloword

  //display info [page
  displayinfo(){
  	this.navctrl.navigateForward('/info');
  }

}
