import { Component } from '@angular/core';


//Component  = Html çıktısına hizmet eder 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = "Emir Hazir's Angular 4 App";
  public options = {
    position:["bottom","right"],
    timeOut:3000,
    lastOnBottom:true
  }
}
