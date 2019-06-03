import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  login = true;
  register = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) { }


    //Exibir form de registro
    exibirRegistrar(){
      this.login = false;
      this.register = true;
    }

    exibirLogin(){
      this.login = false;
      this.register = true;
    }


  ngOnInit() {
  }

}
