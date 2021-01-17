import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {


  context = "login";
  context_title = "Giriş Yapın";

  signupForm = [];//  name, mail, pass, newpass
  loginForm = []; //  mail, pass

  constructor(public toastController: ToastController, private route: ActivatedRoute, private router: Router,private storage: Storage, private http: HttpClient) { 


    this.checkLogin();
   


  }

  ngOnInit() {




  }

  switchContext()
  {
    if(this.context == "login")
    {
      this.context = "signup";
      this.context_title = "Hesap Oluşturun"
    }
    else
    {
      this.context = "login";
      this.context_title = "Giriş Yapın";
    }
  }


  login()
  {

    let query = {key: 'login', email: this.loginForm['mail'], pass: this.loginForm['pass'] };

    this.http.post<any>('http://deskmate.aksoylu.space/handle.php', { data :query }).subscribe(data => {
      let response = data.response;
      if(response == "EMPTY_DATA")
      {
          this.presentToast("Lütfen gerekli bilgileri eksiksiz doldurun");
      }
      else if (response == "INVALID_AUTH")
      {
          this.presentToast("Kullanıcı adınız veya parolanız hatalı");
      }
      else
      {
        if(response.length > 30)
        {
            this.setLogin(response);

        }
        else
        {
          this.presentToast("Bir problem var. Lütfen daha sonra tekrar deneyin");
        }
      }


    });


  }
  signup()
  {

    let query = {key: 'signup', name: this.signupForm['name'], email: this.signupForm['mail'],  pass: this.signupForm['pass'] , rpass: this.signupForm['newpass'] };

    this.http.post<any>('http://deskmate.aksoylu.space/handle.php', { data :query  }).subscribe(data => {
      let response = data.response;
      if(response == "EMPTY_DATA")
      {
          this.presentToast("Lütfen gerekli bilgileri eksiksiz doldurun");
      }
      else if(response == "INVALID_MAIL")
      {
        this.presentToast("E-Posta adresi geçersiz. Lütfen doğru girdiğinizden emin olun");
      }
      else if(response == "USED_MAIL")
      {
        this.presentToast("Bu E-Posta adresi kullanımdadır. Lütfen başka E-Posta ile deneyin");
      }
      else if(response == "PASS_INVALID")
      {
        this.presentToast("Parolalar uyuşmuyor. Lütfen kontrol edin");
      }
      else if(response == "ERROR")
      {
        this.presentToast("Sunucu hatası. Daha sonra tekrar deneyin");
      }
      else if(response == "OK")
      {
        this.presentToast("Hesabınız başarıyla oluşturuldu");
        this.switchContext();
      }
      

    })
  }



  /* Todo: Implement Reset Password later.  */
  renderRefreshPass()
  {

  }



  setLogin(val)
  {

    this.storage.set("userhash", val);
    this.router.navigate(['survey']);

  }
  checkLogin()
  {
    this.storage.get("userhash").then((val) => {

      if(val.length > 30)
      {

        this.router.navigate(['tabs']);

      }


     });
    return false;
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }




}
