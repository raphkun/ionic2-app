import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, AlertController } from 'ionic-angular';

import { AuthService } from "../../providers/auth.service";
import { MasterList } from '../master-list/master-list';

@Component({
  selector: 'signin-page',
  templateUrl: 'signin.html'
})
export class SignInPage {
  loading: Loading;
  sigInCredentials = {email: '', password: ''};

  constructor(public navCtrl: NavController, private authSrv: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

  public signIn() {
    this.showLoading();
    this.authSrv.sigInWithEmailAndPassword(this.sigInCredentials)
      .then(() => {
        this.loading.dismiss();
        this.navCtrl.setRoot(MasterList);
      })
      .catch(err => {
        this.loading.dismiss();
        this.alertCtrl.create({
          title: err.name,
          subTitle: err.message,
          buttons: ['OK']
        }).present();
      })
    ;
  }

  signInWithFacebook(): void {
    this.showLoading();
    this.authSrv.signInWithFacebook()
      .then(()=>{
        this.loading.dismiss();
        this.navCtrl.setRoot(MasterList);
      })
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  ionViewDidLoad() {
  }

}
