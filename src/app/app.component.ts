import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  numberString;
  array: number[] = [];
  integer:number;
  num: number;
  onClick(){
    this.num = 0;
    if(this.numberString.trim()){
      this.array = this.numberString.split(',').map(x => x.trim());
      if(this.array.length > 0 && this.integer){
        this.countNum(this.array,this.integer);
      }
    }
  }
  countNum(array:number[], integer:number) {
    this.num = array.filter(x => x == integer).length;
  }
}
