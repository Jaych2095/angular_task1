import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeApp';
  project_manager_detail=[];
  developer_detail=[];
  designer_detail=[];
  formdataenter(data:{
    firstname:string,
    lastname:string,
    contactno:number,
    salary:number,
    designation:string
  }){
    
    if(data.designation === 'Project-Manager')
    {
      this.project_manager_detail.push(
        {
          firstname:data.firstname,
          lastname:data.lastname,
          contactno:data.contactno,
          salary:data.salary,
          designation:data.designation
        }
      )
    }
    else if(data.designation === 'Developer')
    {
      this.developer_detail.push(
        {
          firstname:data.firstname,
          lastname:data.lastname,
          contactno:data.contactno,
          salary:data.salary,
          designation:data.designation
        }
      )
    }
    else
    {
      this.designer_detail.push(
        {
          firstname:data.firstname,
          lastname:data.lastname,
          contactno:data.contactno,
          salary:data.salary,
          designation:data.designation
        }
      )
    }
  }

}
