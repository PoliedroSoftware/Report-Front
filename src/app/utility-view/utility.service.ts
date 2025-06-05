import { Injectable } from '@angular/core';
import { Utility } from './utility';
import { Inventarios } from '../inventoryView/inventory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

        
       
         //inventarioUrl='https://gr09yevej5.execute-api.us-east-2.amazonaws.com/report/api/v1/inventory-report';
          private url: string =environment.url
          constructor( private http:HttpClient) { }
       
          
          getUtilidad(PNumber:number, PSize:number): Observable<Utility[]> {
              
             
              return this.http.get<Utility[]>(this.url+'utility-report?PageNumber='+PNumber+'&PageSize='+PSize);
              
           } 

          getInventarioP(PNumber:number, PSize:number){

              return this.http.get<Inventarios[]>(this.url+'/inventory-report?PageNumber='+PNumber+'&PageSize='+PSize);

    
          }


}
