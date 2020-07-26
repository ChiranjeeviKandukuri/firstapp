import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  emplist: any = null;
  constructor(public http: HttpClient) {
    this.emplist=[];
  }
  root = 'http://fakerestapi.azurewebsites.net';
  get(): any {
    //return this.http.get(this.root + "/posts/1");
    return this.emplist;
  }
  getemp(id: number) {
    return this.http.get("url" + id);
  }
  save(object: Employee) {
    return this.http.post("url", object);
  }
  update(object: Employee) {
    return this.http.patch("url", object);
  }
  load(data: any) {
    this.emplist = data;
  }
}
