import { EventEmitter } from '@angular/core';
import { Component, ElementRef, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  @Output() close =  new EventEmitter();
  constructor(private elemntRef : ElementRef) { }

  ngOnInit(): void {
    document.body.appendChild(this.elemntRef.nativeElement);
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.elemntRef.nativeElement);   
  }
  OnClick(){
    this.close.emit();
  }

}
