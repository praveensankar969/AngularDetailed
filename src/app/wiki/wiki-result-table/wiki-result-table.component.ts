import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-result-table',
  templateUrl: './wiki-result-table.component.html',
  styleUrls: ['./wiki-result-table.component.css']
})
export class WikiResultTableComponent implements OnInit {
  header : string[] = ["Title", "WordCount", "Snippet"];
  @Input() data : any =[];
  constructor() { }

  ngOnInit(): void {
  }

}
