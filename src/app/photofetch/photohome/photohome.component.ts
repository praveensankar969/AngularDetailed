import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../Photo.service';

@Component({
  selector: 'app-photohome',
  templateUrl: './photohome.component.html',
  styleUrls: ['./photohome.component.css']
})
export class PhotohomeComponent implements OnInit {

  constructor(private service : PhotoService) { }

  imgUrl :string ="";

  ngOnInit(): void {
    this.service.obs.subscribe(res=> this.imgUrl=res.regular);
  }
  OnFetch(){
    this.service.FetchImage().subscribe(res => this.imgUrl=res.regular);
  }


}
