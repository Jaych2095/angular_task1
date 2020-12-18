import { rendererTypeName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() deselement:
  {
    firstname:string,
    lastname:string,
    salary:number,
    contactno:number,
    designation:string
  }
  getcolor(salary:number)
  {
    if(salary<=10000)
    {
      return 'red';
    }
    else if(salary>10000 && salary<20000)
    {
      return 'green';
    }
    else
    {
      return 'blue';
    }
  }

}
