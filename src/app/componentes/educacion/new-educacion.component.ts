import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { EducacionService } from 'src/app/servicio/educacion.service';


@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string = '';
  institucionE: string = '';
  periodoE: string = '';
  lugarE: string = '';

  constructor(private sEducacion: EducacionService, private router: Router){ }

  ngOnInit(): void {

  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.institucionE, this.periodoE, this.lugarE);
    this.sEducacion.save(educacion).subscribe(
      data=> {
        alert("Educación añadida!");
        this.router.navigate(['']);
    }, err =>{
      alert("Fallo al agregar educación");
      this.router.navigate(['']);
    })
  }


}
