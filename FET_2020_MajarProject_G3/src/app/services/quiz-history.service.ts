import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizHistoryService {

  constructor(private http: HttpClient) { }
  getCompleteListOfUser(uid: number) {
    return this.http.get('http://localhost:8080/api/profile/' + uid);
  }
  
 
  getIncompleteQuize(uid: number){
    return this.http.get('http://localhost:8080/api/profile/status/' + uid);
  }
}
