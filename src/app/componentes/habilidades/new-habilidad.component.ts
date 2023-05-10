import { Habilidad } from './../../model/habilidad';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadService } from 'src/app/servicio/habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit{
  nombre: string;
  porcentaje: number;

  constructor(private habilidad: HabilidadService, private router: Router){ }

ngOnInit(): void {

}

onCreate(): void{
  const habilidad = new Habilidad(this.nombre, this.porcentaje);
  this.habilidad.save(habilidad).subscribe(
    data => {
    this.router.navigate(['']);
  },err => {
    alert("Fallo al añadir la habilidad");
    this.router.navigate(['']);
  }
  )
}

}
