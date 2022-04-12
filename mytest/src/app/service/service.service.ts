import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  get_test(){
    return [
        {id:1,dname:'QC Room',description:'this is QC Room'},
        {id:2,dname:'develop Room',description:'this is develop Room'},
        {id:3,dname:'English Room',description:'this is English Room'}
    ]
  }
}
