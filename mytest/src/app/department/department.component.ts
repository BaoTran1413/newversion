import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  idE=0;
  department_name='';
  department_description='';
 
  departments=[
    {id:4,dname:'dat',description:'90'}
  ];
  constructor(private test:ServiceService) { }

  ngOnInit(): void {
    this.departments = this.test.get_test();
  }
  public create(){
    const i= this.departments.filter(e => e.dname === this.department_name)
   console.log(i)
    if(i.length === 0){
      this.departments.push({ 
        id: this.departments.length + 1,
        dname: this.department_name,
        description: this.department_description,
       
      });
      this.department_name='';
      this.department_description='';
   
    }
    else{ 
      alert('trung')
    }
    const u= this.test.get_test().filter(e => e.dname === this.department_name)
    this.test.get_test().push({ 
      id: this.departments.length + 1,
      dname: this.department_name,
      description: this.department_description,
     
    });
  }
  value='';
  reset(){
    this.department_name=this.value;
    this.department_description=this.value;
  }
  delete(id:number){
    const deletes=  this.departments.findIndex(userid => userid.id===id);
    this.departments.splice(deletes,1);
  }
  edit(id:number){
    const edit = this.departments.findIndex(userid => userid.id===id);
    this.department_name=this.departments[edit].dname;
    this.department_description=this.departments[edit].description;
    this.idE = id;
  }
  update(){
    const update = this.departments.findIndex(userid => userid.id===this.idE);
    this.departments[update].dname= this.department_name;
    this.departments[update].description=this.department_description;
  }
}
