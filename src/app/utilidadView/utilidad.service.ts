import { Injectable } from '@angular/core';
import { Utilidad } from './utilidad';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilidadService {
//inventarioUrl='https://gr09yevej5.execute-api.us-east-2.amazonaws.com/report/api/v1/inventory-report';

  constructor( private http:HttpClient) { }

   private url: string =environment.url;

   getInventario(): Observable<Utilidad[]> {
    return this.http.get<Utilidad[]>(this.url);
  }

  getUtilidadP(PNumber:number, PSize:number): Observable<Utilidad[]> {
    console.log(this.url);
    return this.http.get<Utilidad[]>(this.url+'/utility-report?PageNumber='+PNumber+'&PageSize='+PSize);
    
    
  }
}
