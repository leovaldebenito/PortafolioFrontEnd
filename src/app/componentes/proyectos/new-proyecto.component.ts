import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicio/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  nombreP: string = '';
  descripcionP: string = '';

  constructor(private sProyecto: ProyectoService, private router: Router){ }

  ngOnInit(): void {

  }

  onCreate(): void {
    const pro = new Proyecto(this.nombreP, this.descripcionP);
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


}
