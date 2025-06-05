import { Injectable } from '@angular/core';
import { PaymentMethodReport} from './payment-method-report';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})


export class PaymentMethodService {
   private url2: string ="http://134.122.125.60:5005/api/v1/payment-method-report?PageNumber=1&PageSize=10";
   private url: string =environment.url;
  constructor(private http:HttpClient) { } 

 

   getVentasMedios(PNumber:number, PSize:number): Observable<any> {

     return this.http.get(this.url+'payment-method-report?PageNumber='+PNumber+'&PageSize='+PSize);
   }

}
