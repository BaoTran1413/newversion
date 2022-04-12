import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  department:any;
  username: any ='';
  usermark: any ='';
  department_name='';
  idEdit: any = 0;
  
  user=[
    { id:1,name:'bao', mark:'5',department:'this is Bao'},
    { id:2,name:'thien', mark:'6',department:'this is thien'},
    { id:3,name:'huy', mark:'9',department:'this is huy'},
  ]
  constructor(private department_server:ServiceService) { }

  ngOnInit(): void {
    this.department=this.department_server.get_test();
  }
  submits(){
    const i= this.user.filter(e => e.name === this.username)
   console.log(i)
    if(i.length === 0){
      this.user.push({ 
        id: this.user.length + 1,
        name: this.username,
        mark: this.usermark,
        department:this.department_name,
      });
      this.username='';
      this.usermark='';
      this.department_name='';
    }
    else{ 
      alert('trung')
    }
  
  }
  value='';
  reset(){
    this.username=this.value;
    this.usermark=this.value;
    this.department_name=this.value;
  }
  delete(id:number){
    const deletes=  this.user.findIndex(userid => userid.id===id);
    this.user.splice(deletes,1);
  }
  edit(id:number){
    const edit = this.user.findIndex(userid => userid.id===id);
    this.username=this.user[edit].name;
    this.usermark=this.user[edit].mark;
    this.department_name=this.user[edit].department;
    this.idEdit = id;
  }
  update(){
    const update = this.user.findIndex(userid => userid.id===this.idEdit);
    this.user[update].name= this.username;
    this.user[update].mark=this.usermark;
    this.user[update].department=this.department_name
  }
  
}
