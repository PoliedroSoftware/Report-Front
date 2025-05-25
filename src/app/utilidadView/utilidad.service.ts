import { Injectable } from '@angular/core';
import { Utilidad } from './utilidad';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilidadService {
;

  constructor( private http:HttpClient) { }

   private url: string =environment.url;

   

  getUtilidadP(PNumber:number, PSize:number): Observable<Utilidad[]> {
 
    
    return this.http.get<Utilidad[]>(this.url+'/utility-report?PageNumber='+PNumber+'&PageSize='+PSize);
    
    }
 }
