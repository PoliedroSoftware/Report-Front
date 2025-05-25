
import { Injectable } from '@angular/core';
import { Proveedores } from './proveedores';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

//import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

   constructor(private http:HttpClient) { }

  private url: string =environment.url;
  
     
  
    getProveedores(PNumber:number, PSize:number): Observable<Proveedores[]> {
   
       console.log(this.url+'suppliers-report?PageNumber='+PNumber+'&PageSize='+PSize);
       return this.http.get<Proveedores[]>(this.url+'suppliers-report?PageNumber='+PNumber+'&PageSize='+PSize);
      
    }
}
