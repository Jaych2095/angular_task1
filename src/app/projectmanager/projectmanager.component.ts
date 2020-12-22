import { Component, OnInit,EventEmitter,Input } from '@angular/core';
import { changingColourService } from '../changing-colour.service';
import { Employee } from '../shared/employee.model';


@Component({
  selector: 'app-projectmanager',
  templateUrl: './projectmanager.component.html',
  styleUrls: ['./projectmanager.component.css'],
  providers:[changingColourService]
})
export class ProjectmanagerComponent implements OnInit {
  @Input() pmelement:Employee;
  constructor(private color:changingColourService) { }

  ngOnInit(): void {
  }
  getcolor(salary:number)
  {
    return this.color.setcolor(salary);
  }

}
