import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  campaignData:any;
  campaignHeader:any;
  currentDate: any;
  oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds

  constructor(private appservice: AppService){}

  ngOnInit(){
   this.appservice.getAll().subscribe(
    (result) => this.onResult(result)
   );

   this.currentDate = new Date();
  }

  onResult(result:any){
    
    this.campaignData = result['campaigns'];
    this.campaignHeader = result['campaignheaders'];
    console.log(this.campaignData);
  }

  getNumberOfDays(givenDate:Date){
    var diffDays = Math.round(Math.abs((this.currentDate.getTime() - givenDate.getTime())/(this.oneDay)));
    return diffDays;
  }

  showModal(data:any){
    alert(data);
  }
}
