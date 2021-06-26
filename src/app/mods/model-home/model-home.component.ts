import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-home',
  templateUrl: './model-home.component.html',
  styleUrls: ['./model-home.component.css']
})
export class ModelHomeComponent implements OnInit {
  clicked :boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(){
    console.log("Clicked")
    this.clicked = !this.clicked;
  }

}
