import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ProviderService } from '../provider.service'
import { SchedulerPage } from '../scheduler/scheduler.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  taskName: any = ""; // Entered Text
  motivation: String = "";

  taskList = []; // Array to store tasks
  isPageLoaded:boolean;

  today = "";

  constructor(public router: Router, private storage: Storage,public provider: ProviderService) {



    this.isPageLoaded = true;

    this.motivation = this.getRandomMotivation();

    this.today = moment(new Date()).format('DD.MM.YYYY');

    this.storage.get(this.today).then((val) => {

     this.renderTasks(val);

     this.reorderTask();

    });


    this.provider.tasks_refresh = () => { 

      console.log("gorevler");

      this.isPageLoaded = true;

      this.motivation = this.getRandomMotivation();
  
      this.today = moment(new Date()).format('DD.MM.YYYY');
  
      this.storage.get(this.today).then((val) => {
  
       this.renderTasks(val);
  
       this.reorderTask();
  
      });

      
      
    };



  }


renderTasks(val)
{
  this.taskList  = [];
  let taskjson = {};
  let len = 0;
  if(this.isValidJson(val))
  {

    taskjson = JSON.parse(val);
    len = this.countJson(taskjson);


  }
  else
  {
    this.storage.set(this.today, '');
    taskjson = {};
    len = 0;
  }

  for (let i = 0; i < len; i++)
  {
    this.taskList.push(taskjson[i]);
  }

}

addTask() {
    if (this.taskName.length > 0)
    {
    let task = {};

    task['taskName'] = this.taskName;
    task['duration'] = '';
    task['isFinished'] = false;

    this.taskList.push(task);
    this.storage_commit();
    this.taskName = '';
    this.reorderTask();
    }
}

deleteTask(index)
  {
    this.taskList.splice(this.taskList.length-index-1, 1);
    this.reorderTask();
    this.storage_commit();

}

reorderTask()
{
  this.taskList.sort(function(a,b) {
    return b['isFinished']-a['isFinished']
    });

}

storage_commit()
{

  //reorder tasklist
  this.reorderTask();

  //save new tasklist
  this.storage.set(this.today, JSON.stringify(this.taskList));

}

countJson(json)
{
  return Object.keys(json).length;


}

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

runTask(index)
{

  index = this.taskList.length - index -1;


  let data = {
    day: this.today,
    taskname: this.taskList[index]["taskName"],
    taskID: index,
    duration: this.taskList[index]["duration"],
    isFinished: this.taskList[index]["isFinished"]
  };

  let navigationExtras = {
    queryParams: {
      special: JSON.stringify(data)
    }
  };




  this.router.navigate(['scheduler'], navigationExtras);
}








motivationList = [
  "Bırakma. Şimdi acı çek ve hayatının geri kalanını bir şampiyon olarak yaşa.",
  "Ne istediğime karar verdim ve başarana kadar asla pes etmeyeceğim.",
  "İlk önce izlerler. Başarınca nefret ederler. Sonra da taklit ederler.",
  "Yürürsen yakındır bakarsan uzak.",
  "Bazıları başarıyı sadece hayal ederken, bazıları ise her sabah erkenden kalkar ve hayallerini gerçekleştirir.",
  "Şimdi çalış, sonra ağlarsın.",
  "Bu hayatta her şey zor olsa da hiçbir zaman imkansız değildir.",
  "Yalnızca bugün yaptıkların, bütün yarınlarını değiştirebilir.",
  "Bundan bir yıl sonra bugün başlamış olmayı dileyeceksin.",
  "Başarı her gün tekrarlanan küçük çabaların toplamıdır.",
  "Senin almaya cesaret edemediğin riskleri alanlar, senin yaşamak istediğin hayatı yaşarlar. - Sokrates",
  "Yüzüstü yere serilseniz bile, hala ileriye doğru hareket ediyorsunuzdur.",
  "Durmadığın sürece ne kadar yavaş gittiğin önemli değil.",
  "Hayatımın erken dönemlerinde öğrendim ki eğer bir şeyi istiyorsan, biraz gürültü yapsan iyi olur.",
  "Başarıdaki kararlılığım yeterince güçlü ise başarısızlık asla beni yakalayamaz!",
  "Arkamda bıraktığım köprüleri yıkarım ki, başarmaktan başka çarem kalmasın.",
  "Yapamayacağını düşündüğün şeyi yap ve başarısız olursan tekrar dene. Takla atmayan adam ipte hiçbir zaman yürümeyenlerdir…",
  "Daha iyisini yapmanın bir yolu var ise bulun ve kimseye kulak asmayın!",
  "İnsanların en büyük zayıflığı pes etmektir. Başarılı olmanın en kesin kuralı ise her zaman bir kez daha denemektir.",
  "Bir gün kalkacaksınız ve hep hayal ettiğiniz şeyleri yapmaya vakit kalmamış olacak. Şimdi tam zamanı. Harekete geçin.",
  "Hayatımı sadece sen değiştirebilirim. Kimse senin için bunu yapmaz! (Deskmate sana yardımcı olur)",
  "Hayatın %10’u sana olanların, %90’ı ise buna nasıl cevap verdiğinden ibarettir.",
  "Hiçbir engel yürekteki kadar büyük değildir.",
  "İyi yapılmış bir iş, iyi söylenmiş bir işten daha iyidir",
  "Dünden ders çıkar, bugünü yaşa, yarın için umut et!",
  "Zor iş olmadan, yabani otlardan başka bir şey büyümez!"
]
getRandomMotivation()
{
  let rand = Math.floor((Math.random() * this.motivationList.length) + 0);
  return this.motivationList[rand];
}



}



//ionic generate page scheduler

