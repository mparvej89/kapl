import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(public loadingCtrl: LoadingController,
    private toastController: ToastController) { }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'circles',
      duration:5000
    });

    loading.present();
  }
  async hideLoading() {
    const loader = await this.loadingCtrl.getTop();
    if (loader)
      await loader.dismiss();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });

    await toast.present();
  }
}
