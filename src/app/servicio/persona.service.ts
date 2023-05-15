import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://frontendvaldebenito.web.apppersonas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  public details(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  public save(person: persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'crear', person);
  }

  public update(id: number, person: persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, person);
  }

  /*public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/
}
