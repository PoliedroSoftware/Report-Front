import { Injectable } from '@angular/core';
import { VentasMedios } from './ventas-medios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VentasMediosService {
   private url2: string ="http://134.122.125.60:5005/api/v1/payment-method-report?PageNumber=1&PageSize=10";
   private url: string =environment.url;
  constructor(private http:HttpClient) { } 

 

   getVentasMedios(PNumber:number, PSize:number): Observable<any> {
     return this.http.get(this.url+'payment-method-report?PageNumber='+PNumber+'&PageSize='+PSize);
   }

}
