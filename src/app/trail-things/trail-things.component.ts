import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trail-things',
  templateUrl: './trail-things.component.html',
  styleUrls: ['./trail-things.component.css']
})
export class TrailThingsComponent implements OnInit {
  
  age = [];
  constructor() { 
    for (let a = 1; a <= 100; a++) {
        this.age.push(a);    
    }
  }

  ngOnInit(): void {
  }

}
