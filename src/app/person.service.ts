import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

    private apiUrl = 'http://localhost:3000/api/person';

    constructor(private http: HttpClient) { }
  
    getPersons(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }
  
    addPerson(user: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, user);
    }
  
    deletePerson(personId: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${personId}`);
    }
  
    updatePerson(userId: number, user: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${userId}`, user);
    }
  

}