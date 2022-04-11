import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  count: number = 0;

  people: Person[] = [
    {
      name: "Eric",
      lastName: "Lopes"
    },
    {
      name: "Panda",
      lastName: "Silva"
    },
    {
      name: "Texugo",
      lastName: "Oliveira"
    }
  ]

  name: string = "Eric Lopes";
  
  text: string = "";

  constructor() {}

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) clearInterval(interval);
    }, 1000)
  }

  click(): void {

  }

}
