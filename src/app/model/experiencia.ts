export class Experiencia {
  id? : number;
  nombreE : string;
  empresaE : string;
  periodoE : string;
  lugarE : string;

  constructor(nombreE: string, empresaE: string, periodoE: string, lugarE: string) {
    this.nombreE = nombreE;
    this.empresaE = empresaE;
    this.periodoE = periodoE;
    this.lugarE = lugarE;
  }
}
