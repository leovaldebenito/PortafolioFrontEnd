import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicio/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  habilidad: Habilidad = null;

  constructor(
    private habilidades: HabilidadService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidades.details(id).subscribe(
      data => {
        this.habilidad = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidades.update(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
      alert("Error al modificar la habilidad");
      this.router.navigate(['']);
      }
    )
  }

}
