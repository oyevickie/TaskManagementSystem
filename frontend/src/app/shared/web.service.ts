import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface UserDetails {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address: string;
  dob: string;
  username: string;
  Bio: string;
  exp: number;
  iat: number;
  phone: string;
  addadmin: boolean;
  confrimPassword: string;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  _id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  address: string;
  dob: string;
  Bio: string;
  phone: string;
  addadmin: boolean;


}



const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class WebService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }


  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public register(user: TokenPayload): Observable<any> {
    const base = this.http.post(`http://localhost:3000/register`, user);

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        console.log(data);
        return data;
      })
    );

    return request;
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(`http://localhost:3000/login`, user);

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public tasklist(email): Observable<any> {
    return this.http.get(`http://localhost:3000/tasklist/${email}`, {
      headers: { Authorization: ` ${this.getToken()}` }
    });
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('usertoken');
    this.router.navigateByUrl('/login');
  }


  public profile(): Observable<any> {
    return this.http.get(`http://localhost:3000/user`, {
      headers: { Authorization: ` ${this.getToken()}` }
    });
  }



  updateUser(id, user) {
    return this.http.put(`http://localhost:3000/updateuser` + '/' + id, JSON.stringify(user), httpOptions);
  }

  getUser() {
    return this.http.get(`http://localhost:3000/allUser`);
  }



  deleteUser(id){
    return this.http.delete(`http://localhost:3000/deleteUser` + '/' + id);
  }



  getone(id) {
    return this.http.get(`http://localhost:3000/getoneuser/` + id);

  }


  updatePass(id, user) {
    return this.http.put(`http://localhost:3000/updatepass/${id}`, JSON.stringify(user), httpOptions);
  }


  contact(user) {
    return this.http.post(`http://localhost:3000/contact`, JSON.stringify(user), httpOptions);
  }

}
