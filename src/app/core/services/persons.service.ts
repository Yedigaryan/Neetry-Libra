import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonResponse } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private readonly personsUrl: string = 'https://fakerapi.it/api/v2/persons?_quantity=100';

  constructor(private http: HttpClient) {
  }

  getPersons(): Observable<PersonResponse> {
    return this.http.get<PersonResponse>(this.personsUrl);
  }
}
