import { Injectable } from '@angular/core';
import { Inventarios } from './inventory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
 //inventarioUrl='https://gr09yevej5.execute-api.us-east-2.amazonaws.com/report/api/v1/inventory-report';
 private url: string =environment.url
  constructor( private http:HttpClient) { }

   getInventario(): Observable<Inventarios[]> {
    return this.http.get<Inventarios[]>(this.url);
    
  }
  getInventarioP(PNumber:number, PSize:number): Observable<Inventarios[]> {
    return this.http.get<Inventarios[]>(this.url+'?PageNumber='+PNumber+'&PageSize='+PSize);
    
  }
}
