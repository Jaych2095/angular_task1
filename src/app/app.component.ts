import { Component } from '@angular/core';
import { Employee } from './shared/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeApp';
  project_manager_detail:Employee[]=[];
  developer_detail:Employee[]=[];
  designer_detail:Employee[]=[];
  formdataenter(data:{
    firstname:string,
    lastname:string,
    contactno:number,
    salary:number,
    designation:string
  }){
    
    if(data.designation === 'Project-Manager')
    {
      this.project_manager_detail.push(data)
    }
    else if(data.designation === 'Developer')
    {
      this.developer_detail.push(data)
    }
    else
    {
      this.designer_detail.push(data)
    }
  }

}
