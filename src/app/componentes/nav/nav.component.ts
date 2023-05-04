import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService){ }

  ngOnInit():void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  login(){
    this.router.navigate(['/login'])
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}


