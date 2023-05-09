import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ageRange,passwordMatcher } from '../my-validators/MyValidators.validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  registerform=new FormGroup({
    name:new FormControl([],[Validators.required,Validators.pattern("^[A-Z]{1}[a-z]{2,8} [A-Z]{1}[a-z]{2,8}$")]),
    age:new FormControl([],[Validators.required,ageRange]),
    email:new FormControl([],[Validators.required]),
    password:new FormControl([],[Validators.required]),
    cnfpassword:new FormControl([],[Validators.required]),
    mobilenumbers:new FormArray([
                    new FormControl([],[Validators.required]),
                    new FormControl([],[Validators.required])
                  ]),
    address:new FormGroup({
      line1:new FormControl([],[Validators.required]),
      line2:new FormControl([],[Validators.required]),
      city:new FormControl([]),
      state:new FormControl([]),
      country:new FormControl([]),
      pincode:new FormControl([],[Validators.required,Validators.pattern("^[0-9]{3}-[0-9]{3}$")]),
    })
  },[passwordMatcher])

  get name ():FormControl{
    return this.registerform.get('name') as FormControl;
  }
  get age ():FormControl{
    return this.registerform.get('age') as FormControl;
  }
  get password ():FormControl{
    return this.registerform.get('password') as FormControl;
  }
  get cnfpassword ():FormControl{
    return this.registerform.get('cnfpassword') as FormControl;
  }
  get pincode ():FormControl{
    return this.registerform.get('address')?.get('pincode') as FormControl;
  }

  get mobilenumbers():FormArray{
    return this.registerform.get('mobilenumbers') as FormArray
  }
  onRegister(){
    console.log(this.registerform.value)
  }

  addMobile(){
    this.mobilenumbers.push(new FormControl())
  }
  removeMobile(){
    this.mobilenumbers.removeAt(-1)
  }
}
