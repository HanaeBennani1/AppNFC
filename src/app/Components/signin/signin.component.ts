import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { EventEmitterService } from 'src/app/Services/event-emitter.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  nomatch : boolean = false;

  constructor(private eventEmitterService : EventEmitterService,private autService : AuthService, private usersService : UsersService) { }
  ngOnDestroy(): void {
    console.log("init")
  }

  ngOnInit(): void {
    this.autService.initialize();
    console.log("init")
    this.reloadNav();
  }

  onSubmit(form : NgForm){
    console.log("form : "+form);
    console.log(form.value['mailc']);
    console.log(form.value['passc']);

    const r ={
      mail : form.value['mailc'],
      password : form.value['passc']
    }

    const exist = this.autService.users.find((data)=>{
      if(data.mail == r.mail && data.password == r.password){
        this.autService.currentUserId = data.id;
        this.autService.currentUser = data;
        return data;
      }
      return null;
    })

    if(exist==null){
      console.log("0");
      this.nomatch = true;
    }
    else{
      this.nomatch = false;
      console.log("1");
      this.autService.signIn();
    }

  }

  reloadNav(){
    this.eventEmitterService.onFirstComponentClick();
  }

}
