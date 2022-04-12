import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() {}

  getPeople(): Observable<Person[]> {
    let people: Person[] = [
      {
        firstName: "Eric",
        lastName: "Lopes",
        age: 26
      },
      {
        firstName: "Panda",
        lastName: "Silva",
        age: 35
      },
      {
        firstName: "Texugo",
        lastName: "Oliveira",
        age: 46
      }
    ];

    return of(people);
  }
}
