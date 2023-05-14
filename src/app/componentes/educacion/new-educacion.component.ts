import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicio/educacion.service';
import { ImageService } from 'src/app/servicio/image.service';


@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  educacion: Educacion = null;
  nombreE: string = '';
  institucionE: string = '';
  periodoE: string = '';
  lugarE: string = '';
  img: string = '';

  constructor(private sEducacion: EducacionService, private router: Router,
    private activatedRouter: ActivatedRoute, private imageService: ImageService){ }

  ngOnInit(): void {

  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.institucionE, this.periodoE, this.lugarE,this.img);
    this.sEducacion.save(educacion).subscribe(
      data=> {
        alert("Educación añadida!");
        this.router.navigate(['']);
    }, err =>{
      alert("Fallo al agregar educación");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.educacion.img = this.imageService.url
    this.sEducacion.update(id, this.educacion).subscribe(
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
