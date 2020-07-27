import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../model/respuesta';
import { Medico } from '../model/medico';


@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private SEND_MEDICO_URL:string = "http://localhost:8080/test-jpa/srv/personas/insertar";
  private GET_MEDICO_URL:string = "http://localhost:8080/test-jpa/srv/personas/listado";

  constructor(private http: HttpClient) { }

  sendMedico(medico: Medico): Observable<any>{
    return this.http.post<Respuesta>(this.SEND_MEDICO_URL, medico);
  }

  getMedico(): Observable<any[]>{
    return this.http.get<Medico[]>(this.GET_MEDICO_URL);
  }
}
