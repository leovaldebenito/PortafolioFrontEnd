export class Experiencia {
  id? : number;
  nombreE : string;
  empresaE : string;
  periodoE : string;
  lugarE : string;
  img: string

  constructor(nombreE: string, empresaE: string, periodoE: string, lugarE: string,img: string) {
    this.nombreE = nombreE;
    this.empresaE = empresaE;
    this.periodoE = periodoE;
    this.lugarE = lugarE;
    this.img = img;
  }
}
