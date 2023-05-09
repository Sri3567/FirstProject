import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ageRange } from '../my-validators/MyValidators.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent 
{
  constructor(private fmbuilder:FormBuilder)
  {

  }

  profileform=this.fmbuilder.group({
    name: ["",[Validators.required,]],
    age:[""],
    email:[""],
    password:[""],
    cnfpassword:[""],
    mobilenumbers:this.fmbuilder.array([["",[Validators.required]],
                                        ["",[Validators.required]]]),
    address:this.fmbuilder.group({
      line1:["",[Validators.required]],
      line2:["",[Validators.required]],
      city:["",[Validators.required]],
      state:["",[Validators.required]],
      country:["",[Validators.required]],
      pincode:["",[Validators.required]],
    })
  })

  get name():FormControl{
    return this.profileform.get('name') as FormControl
  }
  get age():FormControl{
    return this.profileform.get('age') as FormControl
  }
  get email():FormControl{
    return this.profileform.get('email') as FormControl
  }
  get password():FormControl{
    return this.profileform.get('password') as FormControl
  }
  get cnfpassword():FormControl{
    return this.profileform.get('cnfpassword') as FormControl
  }

  get mobilenumbers():FormArray{
    return this.profileform.get('mobilenumbers') as FormArray
  }
  get pincode ():FormControl{
    return this.profileform.get('address')?.get('pincode') as FormControl
  }

  updateProfile(){
    console.log(this.profileform.value)
  }

  addMobile(){
    this.mobilenumbers.push(new FormControl())
  }
  removeMobile(){
    this.mobilenumbers.removeAt(-1)
  }
}
