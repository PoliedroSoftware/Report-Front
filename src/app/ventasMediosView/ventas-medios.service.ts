import { Injectable } from '@angular/core';
import { VentasMedios } from './ventas-medios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VentasMediosService {
   private url: string ="http://134.122.125.60:5005/api/v1/payment-method-report?PageNumber=1&PageSize=10";

  constructor(private http:HttpClient) { } 

   getTodos() {
    return this.http.get<any[]>(this.url);
  }


   getInventario(): Observable<VentasMedios[]> {
      return this.http.get<VentasMedios[]>(this.url);
      
    }
    getInventarioP(PNumber:number, PSize:number): Observable<VentasMedios[]> {
      return this.http.get<VentasMedios[]>(this.url);
      
    }

    getVentasMedios(): Observable<any> {
    return this.http.get(this.url);
  }




}
