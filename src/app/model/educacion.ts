export class Educacion {
  id: number;
  nombreE: string;
  institucionE: string;
  periodoE: string;
  lugarE: string;
  img: string;

  constructor(nombreE: string, institucionE: string, periodoE: string, lugarE: string , img: string) {

    this.nombreE = nombreE;
    this.institucionE = institucionE;
    this.periodoE = periodoE;
    this.lugarE = lugarE;
    this.img = img;
  }
}
