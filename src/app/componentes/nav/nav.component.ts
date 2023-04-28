import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

@Input() text: string="";

@Output() btnClick = new EventEmitter()

onClick(){
  console.log("Login");
}
}


