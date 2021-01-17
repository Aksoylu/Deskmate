import { Component } from '@angular/core';
import { AlertController, IonicModule, ModalController} from '@ionic/angular';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../provider.service';
import { CalendarComponent } from 'ionic2-calendar/calendar';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  eventSource = [];
  viewTitle: string;
  selectedDay = moment(new Date()).format('DD.MM.YYYY');
  taskList = []; // Array to store tasks


  calendar = {
    mode : 'month',
    currentDate : new Date()
  };




  constructor(public modalCtrl: ModalController,public alertCtrl : AlertController, private storage: Storage,public provider: ProviderService) {

    this.provider.refresh_calendar = () => {
      this.renderDayTasks();
    };

  }



  renderDayTasks()
  {
    this.taskList = [];
    this.storage.get(this.selectedDay).then((val) => {

      let taskjson = {};
      let len = 0;
      if(this.isValidJson(val))
      {

        taskjson = JSON.parse(val);
        len = this.countJson(taskjson);


      }
      else
      {
        this.storage.set(this.selectedDay, '');
        taskjson = {};
        len = 0;
      }

      for (let i = 0; i < len; i++)
      {
        this.taskList.push(taskjson[i]);

      }

      this.reorderTask();

     });
  }

async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

async addTaskModal() {



    const addTaskModal = await this.alertCtrl.create({
      header: 'Görev ekleyin',
      subHeader: this.selectedDay+' tarihi için plan yapın',
      inputs: [
        {
          name: 'Place',
          placeholder: '...',

        },
      ],
      buttons: [
        {
          text: 'İptal',
          handler: (data: any) => {

          }
        },
        {
          text: 'Ekle',
          handler: (data: any) => {
            this.addTask(data.Place);
          }
        }
      ]
    });
  
   await addTaskModal.present();

    
}




addTask(taskName)
  {


    if (taskName != '')
    {
    let task = {};

    task['taskName'] = taskName;
    task['duration'] = '';
    task['isFinished'] = false;

    this.taskList.push(task);
    this.storage_commit();
    this.reorderTask();
    }

}

deleteTask(index)
{
  this.taskList.splice(this.taskList.length-index-1, 1);
  this.reorderTask();
  this.storage_commit();

}

async renameTask(index)
{
  
  let currentTaskname = this.taskList[this.taskList.length-index-1].taskName;
  const renameTaskModal = await this.alertCtrl.create({
    header: 'Görev ekleyin',
    subHeader: "'" + currentTaskname+"' görevini yeniden adlandırın",
    inputs: [
      {
        name: 'Place',
        placeholder: '...',

      },
    ],
    buttons: [
      {
        text: 'İptal',
        handler: (data: any) => {

        }
      },
      {
        text: 'Ekle',
        handler: (data: any) => {
          let newTaskname = data.Place;

          this.taskList[this.taskList.length-index-1].taskName = newTaskname;
          this.reorderTask();
          this.storage_commit();

        }
      }
    ]
  });

 await renameTaskModal.present();



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
  this.storage.set(this.selectedDay, JSON.stringify(this.taskList));

}



/* Calendar Functions */

  onViewTitleChanged(title)
  {
      this.viewTitle = title;
  }

  onTimeSelected(event)
  {
      this.selectedDay = moment(event.selectedTime).format('DD.MM.YYYY');

      this.renderDayTasks();
  }

  onEventSelected(event)
  {
    //let start = moment(event.startTime).format("LLLL");
    //let end = moment(event.endTime).format("LLLL");

  }




/* Helper Functions */
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

countJson(json)
{
  return Object.keys(json).length;


}


}

