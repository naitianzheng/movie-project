import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  submitOrder(order: Order): Observable<any>{
    let url = 'http://localhost:8000/order/'
    let neworder = JSON.stringify(order);
    console.log(neworder);
    return this.http.post<any>(url, neworder, httpOptions)
  }
}
