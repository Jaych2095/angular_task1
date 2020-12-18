import { Component, OnInit,EventEmitter,Input } from '@angular/core';


@Component({
  selector: 'app-projectmanager',
  templateUrl: './projectmanager.component.html',
  styleUrls: ['./projectmanager.component.css']
})
export class ProjectmanagerComponent implements OnInit {
  @Input() pmelement:{
    firstname:string,
    lastname:string,
    contactno:number,
    salary:number,
    designation:string
  };
  constructor() { }

  ngOnInit(): void {
  }
  getcolor(salary:number)
  {
    if(salary<=10000)
    {
      return 'red';
    }
    else if(salary>10000 && salary<=20000)
    {
      return 'green';
    }
    else
    {
      return 'blue';
    }
  }

}
