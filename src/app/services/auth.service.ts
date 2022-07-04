import { Injectable } from '@angular/core';
import { Users } from '../Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: Users[];
  username?: string;
  password?: string;
  isAuthenticated:boolean=false;
  isAdmin:boolean=false;
  constructor() {
    this.user = [
      {
        username: this.username,
        password: this.password,
      }
    ]
  }
  login(uname: string, pword: string, type: number) {
    const ind = {
      username: uname,
      password: pword,
    }
    if (uname === "mohit" && pword === "aswd") {
      this.isAdmin=true;
      return 101;
    }
    else if (type === 1) {
      const results = this.user?.filter(e => {
        return e.username === uname && e.password === pword;
      });
      if (results && results.length === 1) {
        return 202
      }
      else {
        this.user?.push(ind);
        this.isAuthenticated=true;
        return 400
      }
    }
    else if (type === 2) {
      const results = this.user?.filter(e => {
        return e.username === uname && e.password === pword;
      });
      if (results && results.length === 1) {
        this.isAuthenticated=true;
        return 303;
      }
      else {
        return 404;
      }
    }
    else {
      return 404;
    }
  }

}
