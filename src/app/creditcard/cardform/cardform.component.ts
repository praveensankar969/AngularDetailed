import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.css']
})
export class CardformComponent implements OnInit {
  cardForm = new FormGroup({
    name : new FormControl("" , [Validators.required, Validators.minLength(5)]),
    cardno : new FormControl("")

  });
  constructor() { }

  ngOnInit(): void {
  }

}
