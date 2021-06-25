import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cards';

  selectedPage : number =0;
  currentPage : number = 0;

  cardDatas = [
    {
      imageUrl : "assets/biking.jpeg",
      name : "Praveen"
    },
    {
      imageUrl : "assets/mountain.jpeg",
      name : "Rahul"
    },
    {
      imageUrl : "assets/tree.jpeg",
      name : "Vysakh"
    },
    {
      imageUrl : "assets/tree.jpeg",
      name : "Vishnu"
    },
    {
      imageUrl : "assets/mountain.jpeg",
      name : "Prem"
    },
    {
      imageUrl : "assets/tree.jpeg",
      name : "Vysakh"
    },
    {
      imageUrl : "assets/tree.jpeg",
      name : "Vishnu"
    },
    {
      imageUrl : "assets/mountain.jpeg",
      name : "Prem"
    }
  ];

  GetPage(event :Event){
    this.selectedPage = parseInt((event.target as HTMLInputElement).value)-1;
  }
}
