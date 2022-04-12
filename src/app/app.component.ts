import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';
import { Person } from './shared/services/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  count: number = 0;

  people: Person[] = [];

  name: string = "Eric Lopes";
  
  text: string = "";

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {

    this.getPeople();

    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) clearInterval(interval);
    }, 1000)
  }

  getPeople(): void {
    this.peopleService.getPeople().subscribe(people => {
      this.people = people;
    });
  }

}
