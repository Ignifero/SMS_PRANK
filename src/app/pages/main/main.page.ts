import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  fono: string = '';
  sms: string = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async sendSMS() {
    const response = await fetch('https://textbelt.com/text', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: this.fono,
        message: this.sms,
        key: 'textbelt',
      }),
    });

    const data = await response.json();

    if (data.success) {
      this.presentAlert('Mensaje enviado', 'El mensaje se envió correctamente.');
    } else {
      this.presentAlert('Error', data.error);
    }
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
