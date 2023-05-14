import { Educacion } from './../../model/educacion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/servicio/educacion.service';
import { ImageService } from 'src/app/servicio/image.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
    private educacionS: EducacionService,
    private activatedRouter : ActivatedRoute,
    private router : Router,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.details(id).subscribe(
      data => {
        this.educacion = data;
      }, err =>{
      alert("Error al modificar educación");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.educacion.img = this.imageService.url
    this.educacionS.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      },err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
