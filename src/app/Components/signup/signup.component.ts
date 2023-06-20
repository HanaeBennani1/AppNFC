import { Component,OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, EmailValidator, FormControl, FormGroup, NgForm, PatternValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';
import { formatDate } from '@angular/common';
import { User } from 'src/app/Models/User';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']

})
export class SignupComponent implements OnInit,  OnChanges {

  mdpConfirm: String = "";

  isUpdate: boolean = false;

  validationForm: FormGroup;

  currentUser = new User();

  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  constructor(private userService: UsersService, private router: Router,
    private authService: AuthService){
      
      this.validationForm = new FormGroup({
        id: new FormControl(),
        firstName: new FormControl(),
        lastName: new FormControl(null, Validators.required),
        phoneNumber: new FormControl(),
        address: new FormControl(),
        mail: new FormControl('', Validators.email),
        birth: new FormControl(null),
        password: new FormControl(null, Validators.pattern("^" +
          "(?=.*[0-9])" +
          "(?=.*[a-zA-Z])" +
          "(?=\\S+$)" +
          ".{8,}" +
          "$")),
        passConfirm: new FormControl(),
        security: new FormControl(null, Validators.requiredTrue),
        
      }, this.checkPasswords());
  
  
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (this.authService.currentUser.id != "") {
        this.isUpdate = true;
        this.currentUser = this.authService.currentUser;
        this.id = this.currentUser.id;
        this.validationForm.controls['firstName'].setValue(this.currentUser.firstName);
        this.lastName = this.currentUser.lastName;
        this.validationForm.controls['phoneNumber'].setValue(this.currentUser.phoneNumber);
        this.validationForm.controls['address'].setValue(this.currentUser.address);
        this.email = this.currentUser.mail;
        this.birth = this.date[this.currentUser.birth.getDate()];
        this.password = this.currentUser.password;
        this.passConfirm = this.currentUser.password;
        
        
        
      }
  
    }

    ngOnInit(): void {

      if (this.authService.currentUser.id != "") {
        this.isUpdate = true;
        this.currentUser = this.authService.currentUser;
        this.id = this.currentUser.id;
        this.validationForm.controls['firstName'].setValue(this.currentUser.firstName);
        this.lastName = this.currentUser.lastName;
        this.validationForm.controls['phoneNumber'].setValue(this.currentUser.phoneNumber);
        this.validationForm.controls['address'].setValue(this.currentUser.address);
        this.email = this.currentUser.mail;
        this.birth = this.date[this.currentUser.birth.getDate()];
        this.password = this.currentUser.password;
        this.passConfirm = this.currentUser.password;
        
        
        this.validationForm.controls['security'].setValue(true);
      }
    }

    get id(): any {
      
      return this.validationForm.controls['id'].value;
    }
  
    set id(n: string) {
      this.validationForm.get('id')?.setValue(n);
    }

    get firstName(): any {
      
      return this.validationForm.controls['firstName'].value;
    }
  
    set firstName(n: string) {
      this.validationForm.get('firstName')?.setValue(n);
    }

    get lastName(): any {
      
      return this.validationForm.controls['lastName'].value;
    }
  
    set lastName(n: string) {
      this.validationForm.get('lastName')?.setValue(n);
    }

    get phoneNumber(): any {
      
      return this.validationForm.controls['phoneNumber'].value;
    }
  
    set phoneNumber(n: string) {
      this.validationForm.get('phoneNumber')?.setValue(n);
    }

    get address(): any {
      
      return this.validationForm.controls['address'].value;
    }
  
    set address(n: string) {
      this.validationForm.get('address')?.setValue(n);
    }

    get email(): any {
      
      return this.validationForm.controls['mail'].value;
    }
  
    set email(n: string) {
      this.validationForm.get('mail')?.setValue(n);
    }

    get birth(): any {
      return this.validationForm.controls['birth'].value;
    }
  
    set birth(n: string) {
      this.validationForm.get('birth')?.setValue(n);
    }

    get password(): any {
      
      return this.validationForm.controls['password'].value;
    }
  
    set password(n: string) {
      this.validationForm.get('password')?.setValue(n);
    }

    get passConfirm(): any {
      return this.validationForm.controls['passConfirm'].value;
    }
  
    set passConfirm(n: string) {
      this.validationForm.get('passConfirm')?.setValue(n);
    }

    

    get security(): any {
      return this.validationForm.controls['security'].value;
    }


    onSubmit() {
      this.validationForm.markAllAsTouched();
  
  
      console.log(this.validationForm)
  
      if (this.validationForm.valid) {
        {
          console.error(this.validationForm.value);
          this.userService.AddUser(this.validationForm.value)
            .subscribe({
              error : (err) => {console.log(err);},
            }).add(() => {
                this.router.navigate(['/app']);
              
            });
  
        }
  
      }
    }
  

    checkPasswords(): ValidatorFn {
      return (group: AbstractControl): ValidationErrors | null => {
        let pass = group.get('password')?.value;
        let confirmPass = group.get('passConfirm')?.value
        //console.log("password : " +pass+" confirm : "+confirmPass );
  
        return pass === confirmPass ? null : { notSame: true }
      }
    }

}
