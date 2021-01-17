import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../provider.service'


@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.page.html',
  styleUrls: ['./scheduler.page.scss'],
})
export class SchedulerPage implements OnInit {


  data: any;  //Json object
  task_id:number;
  taskname:string = "";

  duration:any;
  isFinished:any = "";
  state:string = "";

  interval:any;
  timer_enabled:boolean;
  timeLeft = 60;
  minuteLeft;
  secondLeft;
  timePercent;

  examplePlan:string = '';
  plan:any;
  planIndex = 0;

  event:string;
  _event:string;
  
  
  fabIcon:any = "pause";

  constructor(public provider: ProviderService, public storage: Storage, private route: ActivatedRoute, private router: Router, public alertCtrl: AlertController) 
  {
 
  this.route.queryParams.subscribe(params => {


      this.data = JSON.parse(params.special);

      this.task_id = this.data["taskID"];
      this.taskname = this.data["taskname"];
      this.duration = this.data["duration"];
      this.isFinished = this.data["isFinished"];


  });


  this.showStateDialog("Nasıl Hissediyorsunuz ?" , "Şu anda bulunduğunuz şartlar verimliliğiniz için ne kadar ideal ?")

  }

  async showStateDialog(_header,_subheader) {
    const alert = await this.alertCtrl.create({
      header: _header,
      subHeader: _subheader,
      inputs: [
        {
          type: 'radio',
          label: 'Kötü',
          value: 'negative',
          checked: true
        },
        {
          type: 'radio',
          label: 'Orta',
          value: 'standart',
          checked: false
        },
        {
          type: 'radio',
          label: 'İyi',
          value: 'good',
          checked: false
        }

    ],
      buttons: [
                  {
                    text: 'Tamam',
                    handler: (data) => {
                     this.state = data;
                     this.showDialog("Zamanınızı Planlayın","Ne kadar çalışacağınızı seçin.");

                    }
                }
      ]
    });
    await alert.present();
    const result = await alert.onDidDismiss();

  }


  async showDialog(_header,_subheader) {
    const alert = await this.alertCtrl.create({
      header: _header,
      subHeader: _subheader,
      inputs: [
        {
          type: 'radio',
          label: '30 Dakika',
          value: '30',
          checked: true
        },
        {
          type: 'radio',
          label: '45 Dakika',
          value: '45',
          checked: false
        },
        {
          type: 'radio',
          label: '50 Dakika',
          value: '50',
          checked: false
        },
        {
          type: 'radio',
          label: '60 Dakika',
          value: '60',
          checked: false
        },
        {
          type: 'radio',
          label: '1 Saat 15 Dakika',
          value: '75',
          checked: false
        },
        {
          type: 'radio',
          label: '1 Saat 30 Dakika',
          value: '90',
          checked: false
        },
        {
          type: 'radio',
          label: '1 Saat 45 Dakika',
          value: '105',
          checked: false
        },




    ],
      buttons: [
                  {
                    text: 'Geri Dön',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                  },
                  {
                    text: 'Başlat',
                    handler: (alertData) => {
                     this.duration = alertData;
                     this.examplePlan = this.parsePlan(alertData);
                     this.renderPlan();
                     this.startPlan();
                    }
                }
      ]
    });
    await alert.present();
    const result = await alert.onDidDismiss();

  }

  async showFinishDialog() {
    const alert = await this.alertCtrl.create({
      header: "Görev Tamamlandı",
      subHeader: "Tebrikler,görevinizi başarıyla tamamladınız. ",
      buttons: [
                  {
                    text: 'Tamam',
                    handler: () => {
                        
                        this.router.navigate(['tabs']);
                    }
                }
      ]
    });
    await alert.present();
    const result = await alert.onDidDismiss();

  }
  ngOnInit() {
    //    console.log(this.examplePlan);

  }

  /* Deskmate yayinlanan surumde webservice ile sunucudan bulanik mantik ile calisan bir model gelistirilecek */
  parsePlan(sec)
  {

      let timesplit = sec / 30;
      let kalan =   sec % 30;
      let newPlan= {};
      let i = 0;
      
      while(i<= timesplit *2 -1)
      {
          let child_work = {
            event : "work",
            duration : (30 * 60)
          };

          newPlan["part" + i] = child_work;

          i++;
          let child_sleep = {

            event: "sleep",
            duration : (5 * 60)

        };
          newPlan["part" +i] = child_sleep;
          i++;
      }

      if(kalan != 0)
      {

          let child_last = {
              event : "sleep",
              duration: kalan
          };

          newPlan["part"+ (i+1)] = child_last;

      }

      return JSON.stringify(newPlan);

  }
  renderPlan()
  {
    let plan = JSON.parse(this.examplePlan);
    
  }
  startPlan()
  {

    this.plan= JSON.parse(this.examplePlan);
    this.timeLeft = this.duration;

    let planCount = Object.keys(this.plan).length;

    for(let i =0; i< planCount; i++)
    {
        if(this.planIndex == i)
        {
          this.duration = this.plan["part"+ this.planIndex]["duration"];
          this._event = this.plan["part"+ this.planIndex]["event"];
          if(this._event == "work")
          {
            this.event= "Şimdi Çalış";
          }
          else
          {
            this.event ="Şimdi Dinlen";
          }

          this.startTimer();
        }
    }
    this.timeLeft = this.duration ;

  }

  nextPart()
  {
    this.planIndex ++;
    let planCount = Object.keys(this.plan).length;
   /// console.log(JSON.stringify(newPlan));
    for(let i =0; i< planCount+1; i++)
    {

        if(this.planIndex == i)
        {

            this.duration = this.plan["part"+ this.planIndex]["duration"];
            this._event = this.plan["part"+ this.planIndex]["event"];
            this.timeLeft = this.duration ;
            if(this._event == "work")
            {
              this.event= 'Şimdi Çalış';
            }
            else
            {
              this.event ='Şimdi Dinlen';
            }

            this.startTimer();
        }

    }

  }
  startTimer()
  {
      this.timer_enabled = true;
      this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
      this.timeLeft--;
      } else {
        this.pauseTimer();

      }
      this.minuteLeft = Math.floor(this.timeLeft/60);
      this.secondLeft = this.timeLeft -  (this.minuteLeft * 60);
      this.timePercent = Math.floor((this.timeLeft/ (this.duration) ) * 100);
      },1000);
  }

  pauseTimer()
  {
      clearInterval(this.interval);
      this.minuteLeft = 0;
      this.secondLeft = 0;
      this.timeLeft = 0;
      let planCount = Object.keys(this.plan).length;
      if(this.planIndex == planCount-1)
      {
        this.finishTask();
      }
      else
      {
        this.breakOut();
        this.nextPart();
      }
      

  }

  timerEnable()
  {
    if(this.timer_enabled)
    {
      this.timer_enabled = false;
      clearInterval(this.interval);
      this.fabIcon= "play";
    }
    else
    {
      this.timer_enabled = true;
      this.startTimer();
      this.fabIcon= "pause";
    }
   
  }


  /* Play Sound */
  breakOut()
  {
    //this.nativeAudio.play('triangle').then();
    let audio_triangle = new Audio("../../assets/triangle.mp3");
    audio_triangle.play();


  }

  finishTask()
  {
    //play finish sound and create alert dialog
    let audio_triangle = new Audio("../../assets/success.mp3");
    audio_triangle.play();

    this._event = "sleep";
    this.event = "Görev Tamamlandı !";
    
    let today = moment(new Date()).format('DD.MM.YYYY');
    this.storage.get(today).then((val) => {

        if(this.isValidJson(val))
        {
            let taskjson = JSON.parse(val);
            let len = Object.keys(taskjson).length;

            taskjson[this.task_id]["isFinished"] = true;

            let taskjson_ = JSON.stringify(taskjson);

            this.storage.set(today, taskjson_);

        }

    });




  }


  

/* Helpers  */

isValidJson(str)
{
    try
    {
        if(JSON.parse(str) != null)
        {
          return true;

        }
        else
        {
          return false;

        }
    } catch (e) {
        return false;
    }
    return true;
}


back()
{
  this.provider.tasks_refresh();
}

exit()
{
  this.provider.tasks_refresh();
  this.router.navigate(['tabs']);
}



}
