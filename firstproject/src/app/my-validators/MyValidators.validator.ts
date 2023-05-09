import { AbstractControl } from "@angular/forms";

export function ageRange(control:AbstractControl):{}|null
{
    let min = 18
    let max = 45

    if(control!=null &&control.value!="")
    {
        if(control.value<min || control.value>max)
        {
            return {"ageRange":true,"min":min,"max":max}
            //Error object 
        }
        
    }
    return null;
}

export function passwordMatcher(group:AbstractControl):{}|null
{
    let passwordCtrl = group.get('password')
    let cnfpasswordCtrl = group.get('cnfpassword')

    if(passwordCtrl?.value!="" && cnfpasswordCtrl?.value!="")
    {
        if(passwordCtrl?.value!=cnfpasswordCtrl?.value)
        {
            cnfpasswordCtrl?.setErrors({'passwordMatcher':true})
        }
    }
    return null;
}