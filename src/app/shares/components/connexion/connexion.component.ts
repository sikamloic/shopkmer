import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  showPassword : boolean = false;
  loginGroup : FormGroup
  constructor
    (
      private userService : UserService,
      private localStorage : LocalStorageService,
      private formBuilder : FormBuilder,
      private route : Router
    )
  {
    this.loginGroup = this.formBuilder.group({
      email : formBuilder.control('', [Validators.required, Validators.email]),
      pwd : formBuilder.control('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }

  signIn(){
    this.userService.userLogin(this.loginGroup.value.email, this.loginGroup.value.pwd).subscribe((res:any)=>{
      console.log(res)
      this.localStorage.set('x-access-token', res.accessToken)
      this.route.navigate(["/cliente-acceuil"])
    })
  }

}
