export class Educacion {
  id: number;
  nombreE: string;
  institucionE: string;
  periodoE: string;
  lugarE: string;

  constructor(nombreE: string, institucionE: string, periodoE: string, lugarE: string) {

    this.nombreE = nombreE;
    this.institucionE = institucionE;
    this.periodoE = periodoE;
    this.lugarE = lugarE;
  }
}
