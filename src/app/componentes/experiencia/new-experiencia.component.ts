import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImageService } from 'src/app/servicio/image.service';
import { SExperienciaService } from 'src/app/servicio/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  experiencia: Experiencia = null;
  nombreE: string = '';
  empresaE: string = '';
  periodoE: string = '';
  lugarE: string = '';
  img: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router,
    private activatedRouter: ActivatedRoute, private imageService: ImageService){ }

  ngOnInit(): void {

  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.empresaE, this.periodoE, this.lugarE, this.img);
    this.sExperiencia.save(expe).subscribe(
      data=> {
        alert("Experiencia añadida!");
        this.router.navigate(['']);
    }, err =>{
      alert("Fallo al agregar experiencia");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.experiencia.img = this.imageService.url
    this.sExperiencia.update(id, this.experiencia).subscribe(
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
