import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

@Input() text: string="";

@Output() btnClick = new EventEmitter()

constructor(private router: Router){}

login(){
  this.router.navigate(['/login'])
}
}


