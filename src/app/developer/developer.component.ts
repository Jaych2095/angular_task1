import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() develement:{
    firstname:string,
    lastname:string,
    contactno:number,
    salary:number,
    designation:string
  }
  getcolor(salary1:number)
  {
    if(salary1<=10000)
    {
      return 'red';
    }
    else if(salary1>10000 && salary1<=20000)
    {
      return 'green';
    }
    else{
      return 'blue';
    }
  }
}
