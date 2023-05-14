import { Habilidad } from './../model/habilidad';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  URL = environment.URL + 'habilidad/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.URL + 'lista');
  }

  public details(id: number): Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.URL + `details/${id}`);
  }

  public save(habilidad: Habilidad): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habilidad);
  }

  public update(id: number, habilidad: Habilidad): Observable<any> {
  return this.httpClient.put<any>(this.URL + `update/${id}`, habilidad);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
