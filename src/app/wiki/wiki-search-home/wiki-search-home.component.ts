import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service.service';

@Component({
  selector: 'app-wiki-search-home',
  templateUrl: './wiki-search-home.component.html',
  styleUrls: ['./wiki-search-home.component.css']
})
export class WikiSearchHomeComponent implements OnInit {
  searchQuery :string ="";
  searchResult : any;

  constructor(public service : HttpService) { }

  ngOnInit(): void {
  }

  GetInput(value : string){
    this.searchQuery = value;
    console.log(this.searchQuery);
    console.log(this.service.SearchTerm(this.searchQuery).subscribe(res=> {
      this.searchResult = res.query.search;
    }));
    
  }



}
