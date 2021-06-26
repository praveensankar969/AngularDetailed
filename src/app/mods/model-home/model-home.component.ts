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
    this.clicked = !this.clicked;
  }

}
