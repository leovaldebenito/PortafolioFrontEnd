import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicio/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  empresaE: string = '';
  periodoE: string = '';
  lugarE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router){ }

  ngOnInit(): void {

  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.empresaE, this.periodoE, this.lugarE);
    this.sExperiencia.save(expe).subscribe(
      data=> {
        alert("Experiencia añadida!");
        this.router.navigate(['']);
    }, err =>{
      alert("Fallo al agregar experiencia");
      this.router.navigate(['']);
    })
  }


}
