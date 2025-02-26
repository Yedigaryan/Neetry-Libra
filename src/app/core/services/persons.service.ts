// Angular core imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS imports
import { Observable } from 'rxjs';

// Application interfaces
import { IPersonResponse } from '../interfaces/IPerson';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  private readonly personsUrl: string = 'https://fakerapi.it/api/v2/persons?_quantity=100';

  constructor(private http: HttpClient) {
  }

  getPersons(): Observable<IPersonResponse> {
    return this.http.get<IPersonResponse>(this.personsUrl);
  }
}
