import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 
  public firstname:string;
  public lastname:string;
  public contactno:number;
  public salary:number;
  public designation:string;
  
  
  @Output() onSubmit=new  EventEmitter<{
  firstname:string,
  lastname:string,
  contactno:number,
  salary:number,
  designation:string
  }>();
 
  constructor() { }

  ngOnInit() {
  }
  
  

  onFormSubmit()
  {
     
    if(!this.firstname ||  !this.lastname ||  !this.contactno || !this.salary ||  !this.designation)
    {
      alert('Please Fill All the Details');
    }
    else if(this.firstname.includes(" ") || this.lastname.includes(" ") ||  this.contactno.toString().includes(" ") || this.salary.toString().includes(" "))
    {
      alert("Remove Blank Space from the Field");
    }
    else if(this.contactno.toString().length!=10)
    {
      alert('Mobile Number Should be 10 Digit')
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
