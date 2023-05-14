
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/servicio/image.service';
import { ProyectoService } from 'src/app/servicio/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  proyecto: Proyecto = null;
  nombreP: string = '';
  descripcionP: string = '';
  img: string = '';
  url: string = '';

  constructor(private sProyecto: ProyectoService, private router: Router,
    private activatedRouter: ActivatedRoute, private imageService: ImageService){ }

  ngOnInit(): void {

  }

  onCreate(): void {
    const pro = new Proyecto(this.nombreP, this.descripcionP, this.img, this.url);
    this.sProyecto.save(pro).subscribe({
      next: (data) => {
      alert('Proyecto agregado');
      this.router.navigate(['']);
      },
      error: (err) => {
      alert('Fallo al agregar proyecto');
      this.router.navigate(['']);
      }
      })
  }

  onUpdate(): void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.proyecto.img = this.imageService.url
    this.sProyecto.update(id, this.proyecto).subscribe(
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
