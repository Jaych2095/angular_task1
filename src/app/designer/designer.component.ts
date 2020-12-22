
import { Component, Input, OnInit } from '@angular/core';

import { changingColourService } from '../changing-colour.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css'],
  providers:[changingColourService]
})
export class DesignerComponent implements OnInit {

  constructor(private color:changingColourService) { }

  ngOnInit(): void {
  }
  @Input() deselement: Employee[];
  getcolor(salary:number)
  {
    return this.color.setcolor(salary);
  }

}
