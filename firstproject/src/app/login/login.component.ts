import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
  // here we declare formControl directly in component
    name = new FormControl([])

    onSave(){
      console.log(this.name)
      console.log(this.name.value)
    }
//-------------------------------------------------------------
    // Login Form model
      // here we declare formControls using formgroup.
    loginform = new FormGroup({
      username:new FormControl([],[Validators.required,Validators.email]),
      password:new FormControl([],[Validators.required,Validators.pattern("^[A-Z]+[a-z0-9_$]{4,8}$")])
    })

    // getters
    get username():FormControl
    {
      return this.loginform.get('username') as FormControl
    }
    get password():FormControl
    {
      return this.loginform.get('password') as FormControl
    }

    onLogin(){
      console.log(this.loginform.value)
    }
//----------------------------------------------------------
}
