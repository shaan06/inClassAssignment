import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Output()
  
  onButtonClick = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.onButtonClick.emit("I'm Clicked!");

  }

}
