import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';
import { TokenService } from 'src/app/servicio/token.service';



@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  persona: persona = null;

  miPorfolio:any;

  constructor(public personaService: PersonaService, private tokenService: TokenService){

  }

  isLogged = false;
  ngOnInit():void{
    this.cargarPersona();
    if(this.tokenService.getToken()){
    this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.details(1).subscribe(data =>
      {this.persona = data}
      )
  }

}
