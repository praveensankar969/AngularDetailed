import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.css']
})
export class WikiSearchComponent implements OnInit {
  input : string ="";
  @Output() searchInput = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  GetValue(event :Event){
    this.input = (event.target as HTMLInputElement).value;
  }
  EmitData(event :Event){
    event.preventDefault();
    this.searchInput.emit(this.input);
  }

}
