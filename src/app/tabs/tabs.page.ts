import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../provider.service';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  
  constructor(private http: HttpClient, public toastController: ToastController,public router: Router, private storage: Storage, public provider: ProviderService )
  {

    this.checkLogin();
   


  }

  calendar_refresh()
  {
    this.provider.refresh_calendar();

  }

  tasks_refresh()
  {
    this.provider.tasks_refresh();
  }

  profile_refresh()
  {
    this.personelData();
    

  }

  checkLogin()
  {
    this.storage.get("userhash").then((val) => {

          if(val.length  < 30)
          {
            this.storage.set("name", "");
            this.storage.set("eager", "");
            this.storage.set("userhash", "");
            this.router.navigate(['auth']);

          }

 
     });
  }





  

  personelData()
  {
      this.storage.get("userhash").then((val) => {

          let query = {key: 'personalData', hash : val };
          this.http.post<any>('http://deskmate.aksoylu.space/handle.php', { data :query }).subscribe(data => {
              let _eager = data.eager;

              if(_eager == "INVALID_HASH")
              {
                this.storage.set("name", "");
                this.storage.set("eager", "");
                this.storage.set("userhash", "");
                this.router.navigate(['auth']);

              }
              else
              {
                  let _name = data.name;
                  this.storage.set("name", _name);
                  this.storage.set("eager", _eager);
                  this.provider.refresh_profile();

              }

           });
      });
  

    
  }



async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }


  


}
