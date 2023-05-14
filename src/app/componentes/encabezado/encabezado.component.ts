import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/servicio/image.service';
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

  constructor(public personaService: PersonaService, private tokenService: TokenService,
    private activatedRouter: ActivatedRoute, private imageService: ImageService){

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

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
