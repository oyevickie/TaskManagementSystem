import { Injectable } from '@angular/core';
import { WebService } from '../shared/web.service';
import { Router, CanActivate } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate{
registered(value: any) {
  throw new Error("Method not implemented.");
}

constructor(private auth:WebService, private router: Router) {}

canActivate() {
  if(!this.auth.isLoggedIn()) {
    this.router.navigateByUrl('http://localhost:3000/')
    return false
  }
  return true
}

}
