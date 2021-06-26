import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
  @Input() data : any =[]
  selected : number =0;
  active = false;
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(index :number){
    if(this.selected===index){
      this.selected =-1;
    }
    else{
      this.selected = index;
    }
    
  }
 
}
