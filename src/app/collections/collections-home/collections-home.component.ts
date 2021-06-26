import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [
    {name: "James", age: "19", job: "Student"},
    {name: "Praveen", age: "24", job: "Engineer"},
    {name: "Rahul", age: "23", job: "Professor"},
    {name: "Prem", age: "28", job: "Astronaut"}
  ];

  header = [
    {key:"name", value: "Name"},
    {key:"age", value: "Age"},
    {key:"job", value: "Job"}
  ];

}
