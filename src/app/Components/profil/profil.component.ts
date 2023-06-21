import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  constructor(private userService: UsersService){}




  ngOnInit(): void {


    // Test du get avec un Guid enregistré dans la base
    this.userService.GetById("ef08141f-70ce-49e4-588f-08db728f2b0b")
    .subscribe({
      next:(value : object) =>{
        console.log(value);
      }
    });

  }

}

