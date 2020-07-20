import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // tslint:disable-next-line: variable-name
  constructor( private _http: HttpClient) { }



  completee() {
    return this._http.get(`http://localhost:3000/completetask`);
  }

  getTasks() {
    return this._http.get(`http://localhost:3000/alltask`);
  }

  createTask(task) {
    return this._http.post(`http://localhost:3000/createtask`, JSON.stringify(task), httpOptions);
  }

  updateTask(id, tasklist) {
    return this._http.put(`http://localhost:3000/updatetask` + '/' + id, JSON.stringify(tasklist), httpOptions);
  }

  deleteTask(id){
    return this._http.delete(`http://localhost:3000/deletetask` + '/' + id);
  }

  getone(id) {
    return this._http.get(`http://localhost:3000/getone/` + id);

  }

  updatestatus(id, tasklist) {
    return this._http.put(`http://localhost:3000/updatestatus/` + id, JSON.stringify(tasklist), httpOptions);
  }
  pendings() {
    return this._http.get(`http://localhost:3000/pendingtask`);
  }

  gettaskDetails(task) {
    return this._http.post(`http://localhost:3000/usertask`, JSON.stringify(task), httpOptions);
  }

  Updatecomment(id, email, comment) {
    return this._http.put(`http://localhost:3000/comment/${id}/${email}`, JSON.stringify(comment), httpOptions)
  }


  public taskPending(email) {
    return this._http.get(`http://localhost:3000/userpending/${email}`);
  }


  public taskComplete(email) {
    return this._http.get(`http://localhost:3000/usercomplete/${email}`);
  }


  getcomment(id) {
    return this._http.get(`http://localhost:3000/getcomment/` + id);

  }

}
