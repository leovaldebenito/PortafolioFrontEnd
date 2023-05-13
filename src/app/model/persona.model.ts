export class persona{
  id?:number;
  nombre:string;
  apellido:string;
  descripcion: string;
  ubicacion: string;
  img:string;

  constructor(nombre:string,apellido:string,img:string,descripcion:string,ubicacion:string){
    this.nombre=nombre;
    this.apellido=apellido;
    this.descripcion=descripcion;
    this.ubicacion=ubicacion;
    this.img=img;
  }
}
