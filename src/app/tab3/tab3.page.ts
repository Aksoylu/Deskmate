import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';  
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../provider.service'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  

  username:string = "";
  userrank:string = "";
  userjob:string = "Açık Kaynak Kullanım";
  isPremium:string = "";


  calendar = {
    mode : 'month',
    currentDate : new Date()
  };
  
  constructor(public router: Router, public alertCtrl: AlertController, private storage: Storage,public provider: ProviderService) {


    //this.username = "Ümit Aksoylu";
    this.userjob = "Açık Kaynak Kullanım";
  
    this.isPremium = "";

    this.provider.refresh_calendar = () => { 
      this.updatePersonal();
    };
    this.updatePersonal();


  }


  updatePersonal()
  {
  
  
    this.storage.get("name").then((name) => { 

      this.username = name;

    });

    this.storage.get("eager").then((eager) => { 

      this.userrank = eager;

    });
  }


  analyze()
  {
    //TODO : ANALYZE
  }
  podcast()
  {
    this.showAlert("Beta Sürüm","","Uygulama henüz beta sürümdedir. Podcast'ler ve blog içerikleri için lütfen uygulamanızı güncelleyin.");
  }

  advise()
  {
    this.showAlert("Beta Sürüm","","Uygulama henüz beta sürümdedir. Profesyonel yaşam koçları ve danışmanlardan destek hizmeti almak için lütfen uygulamanızı güncelleyin");
  }


  logout()
  {

    this.showDialog("Hesaptan Çıkış Yap","Google hesabından çıkış yap","Çıkış yapmak istediğinize emin misiniz ? Uygulama verileriniz buluta kaydedilecektir.");
  }

  async showAlert(_header,_subheader_,_message) {
    const alert = await this.alertCtrl.create({
      header: _header,
      subHeader: _subheader_,
      message: _message,
      buttons: ['Tamam']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }


  
  async showDialog(_header,_subheader_,_message) {  

    const alert = await this.alertCtrl.create({  
      header: _header,  
      subHeader: _subheader_,  
      message: _message,  
      buttons: [  
                  {
                    text:'Vazgeç',
                  },
                  { text:'Çıkış Yap',
                    handler: () => { 
                                    this.storage.set('userhash', '');
                                    this.router.navigate(['auth']);
                                    },
                  }
              
              
              ],
      
    });  
    await alert.present();
    const result = await alert.onDidDismiss();

   



  } 


  verimAnalizi()
  {
    this.router.navigate(['stats']); 
  }

  anket()
  {
    this.router.navigate(['survey']);
  }
}
