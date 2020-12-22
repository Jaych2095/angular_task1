import { Component, Input, OnInit } from '@angular/core';
import { changingColourService } from '../changing-colour.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
  providers:[changingColourService]
})
export class DeveloperComponent implements OnInit {

  constructor(private color:changingColourService ) {}

  ngOnInit(): void {
  }
  @Input() develement:Employee;
  getcolor(salary:number)
  {
    return this.color.setcolor(salary);
  }
  
}
