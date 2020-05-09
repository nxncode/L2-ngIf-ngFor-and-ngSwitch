import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngIf-ngFor-ngSwitch';

  booleanValue : boolean = true;
  intValue : number = 3;
  numberArray = [1,2,3,4,5,6,7,8,9];
  
  changeValue(){
    this.booleanValue = !this.booleanValue;
  }

  changeIntValue(){
    this.intValue = -this.intValue;
  }
  
}
