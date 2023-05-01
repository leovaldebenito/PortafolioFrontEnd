import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicio/persona.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  persona: persona = new persona("","","");

  miPorfolio:any;

  constructor(public personaService: PersonaService,
    private datosPorfolio:PorfolioService){

  }

  ngOnInit():void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio=data;
    });
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }


}
