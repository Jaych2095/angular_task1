import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname='';
  lastname='';
  contactno:number;
  salary:number;
  designation='';
 

  @Output() onSubmit=new  EventEmitter<{
    firstname:string,
    lastname:string,
    contactno:number,
    salary:number,
    designation:string
  }>();

  onFormSubmit()
  {
    if(this.contactno.toString().length!=10)
    {
      alert('The Number should be 10 digit');
    }
    else if(this.firstname.length===0 || this.lastname.length===0 || this.contactno.toString().length===0 || this.salary.toString().length===0 || this.designation.length===0)
    {
      alert('Please Fill All the Details');
    }
    else
    {
    this.onSubmit.emit({
      firstname:this.firstname,
      lastname:this.lastname,
      contactno:this.contactno,
      salary:this.salary,
      designation:this.designation
    })
  }
  }


  
}
