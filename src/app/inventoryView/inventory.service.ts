import { Injectable } from '@angular/core';
import { Inventarios } from './inventory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
 
 private url: string =environment.url
  constructor( private http:HttpClient) { }

 
  getInventarioP(PNumber:number, PSize:number){

    return this.http.get<Inventarios[]>(this.url+'/inventory-report?PageNumber='+PNumber+'&PageSize='+PSize);
     
  }
}
