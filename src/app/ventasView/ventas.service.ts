import { Injectable } from '@angular/core';
import { Ventas } from './ventas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  //inventarioUrl='https://gr09yevej5.execute-api.us-east-2.amazonaws.com/report/api/v1/inventory-report';
 private url: string =environment.url
  constructor( private http:HttpClient) { }

   getInventario(): Observable<Ventas[]> {
    return this.http.get<Ventas[]>(this.url);
    
  }
  getInventarioP(PNumber:number, PSize:number): Observable<Ventas[]> {
    return this.http.get<Ventas[]>(this.url+'?PageNumber='+PNumber+'&PageSize='+PSize);
    
  }

  
}
