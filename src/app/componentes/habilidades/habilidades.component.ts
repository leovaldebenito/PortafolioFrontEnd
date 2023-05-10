import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicio/habilidad.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidad: Habilidad [] = [];

  constructor(private habilidades: HabilidadService, private tokenService: TokenService){ }
  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void {
    this.habilidades.lista().subscribe(
      data => {
        this.habilidad = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined) {
      this.habilidades.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }
}
