import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(private http: HttpClient) {}
  chart() {
   return  this.http.get("http://localhost:8080/api/chart");
  }

  getTopScore(){
    return this.http.get("http://localhost:8080/api/sc");
  }
 
  getUsers(){
    return this.http.get("http://localhost:8080/api/sc/usersoftheDay/users");
  }
 
}
