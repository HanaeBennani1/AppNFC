import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth : boolean = false;
  Response : any;

  users : User[] = []

  currentUserId : string = "";
  currentUser : User = new User();

  constructor(private router : Router, private usersService : UsersService) {
    this.initialize();
   }

   signIn(){

    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.isAuth = true;
        this.router.navigate(['/app']);
        resolve(true);
    }, 2000);
    })
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

   initialize(){
    this.usersService.GetAll()
    .subscribe(data=>{this.Response = data})
    .add(() => this.loadUsers());
  }

  loadUsers(): void {
    this.users = [];
  if (this.Response) {
    for (let i of this.Response) {
      
      this.users.push(i);
    }
    console.log("auth Service : "+this.users.length)

  }

  }
}
